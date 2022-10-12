const { AuthenticationError } = require('apollo-server-express');
const { User, Bet } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    //all users as array
    users: async () => {
      return User.find().populate('bets');
    },
    //specific user by username
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('bets');
    },
    //all bets by username
    getBets: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Bet.find(params).sort({ createdAt: -1 });
    },
    //specific bet by betID
    getSingleBet: async (parent, { betId }) => {
      return Bet.findOne({ _id: betId });
    },
    //All reactions to a bet by betID
    bet_Reactions: async (parent, { betId }) => {
      return Bet.findOne({ _id: betId }).populate('reactions');
    },
    //All comments on a bet by betID
    comments: async (parent, { betId }) => {
      return await Bet.findOne({ _id: betId }).populate('comments');
    },
    //use this to populate a user's feed -- it only has their friends' bets on it
    friendBets: async (parent, args, context) => {
      if (context.user) {
        return await Bet.find({
          betAuthor: { $in: [...args.friends] },
        }).sort({ createdAt: -1 });
      }
    },
    me: async (parent, args, context) => {
      console.log("username: " + context.user.username)
      if (context.user) {
        return await User.findById(context.user._id);
      }
      else {console.log("please log in to do that")}
    },
    //All reactions to a bet by betID
    // comm_Reactions: async (parent, { commentId }) => {
    //   return Bet.findOne({ _id: commentId }).populate('reactions');
    // },
    //friends of user by username
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('friends');
    },
  },
  Mutation: {
    // Create User with username, email, and password vars sent to user
    // This may be it for MVP - we may have to pass all vars on creation - or just allow for updates later, but would require a "findAndUpdate" mutation
    addUser: async (parent, { name, username, email, password, profilePic }) => {
      const user = await User.create({ name, username, email, password, profilePic });
      const token = signToken(user);
      return { token, user };
    },
    // Login 
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      const token = signToken(user);
      return { token, user };
    },
    //update user info
    updateUser: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          {
            ...args
          }
        );
        const token = signToken(user);
        return { token, user };
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // add a bet
    addBet: async (parent, {betData}, context ) => {
      //const betAuthor = context.user.username;
      const { desc, participants, betAuthor } = betData;
      const bet = await Bet.create({ desc , participants , betAuthor});
      // this is looping through the participants array and adding the bet to each of their accounts - will likely need logic to prevent redundant bets on the feed
      // participants just a string (Brisco, Anne, Rachel, Solen)
      // for (const el of participants) {
      await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { bets: bet._id } }
      );
    //};
      return bet;
    },
    //Need help with this one - how do you only update specific fields within a row? Should we be doing a replace? how do we handle the fields not being replaced (i.e. desc could be updated, but what if that field is empty/not updated?)
    //update a bet with the winners
    updateBet: async (parent, { betData }) => {
      const { betId, desc, participants, winner} = betData;
      return Bet.findOneAndUpdate (
        {_id: betId},
        {desc: desc, participants: participants, winner: winner },
        {
          new: true,
          runValidators: true,
        }
        );
    },
    //delete a bet
    deleteBet: async (parent, { betId}) => {
       return Bet.findOneAndDelete({ _id: betId })
    },
    //add a comment to a bet
    addComment: async (parent, { betId, commentText, commentAuthor }) => {
      return Bet.findOneAndUpdate(
        { _id: betId },
        {$addToSet: { comments: { commentText, commentAuthor } },},
        {
          new: true,
          runValidators: true,
        }
      );
    },
    //delete comment from a bet
    deleteComment: async (parent, { betId, commentId }) => {
      return Bet.findOneAndUpdate(
        { _id: betId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
    //adding reactions - maybe not objects/models? treat them like comments? likely cleaner. Check to make sure that doesn't break anything. 
    betAddReaction: async (parent, { betId, reaction, reactionAuthor }) => {
      // const reaction = await Reaction.create({reaction, reactionAuthor});

      // await Bet.findOneAndUpdate(
      //   { _id: betID},
      //   { $addToSet: {//return to here}}
      // );
    },
    // commAddReaction: async (parent, { commentId, reaction, reactionAuthor}) => {},
    deleteReaction: async (parent, { reactionId}) => {
      return Reaction.findOneAndDelete({ _id: reactionId});
    },

    //how are we going to handle this as a request? Are we going to send this as a request or something? I don't know how to code that - below is more functionally a "follow" and not a friend since we don't require any approval
    // friend is the friend's username
    addFriend: async (parent, { username, friend }) => {
      return User.findOneAndUpdate(
        { username: username},
        { $addToSet: {friends: {friend}}},
        { new: true}
        );
    },
    // addFriend: async (parent, args, context) => {
    //   if (context.user) {
    //     const user = await User.findOneAndUpdate(
    //       { _id: context.user._id },
    //       { $addToSet: { friends: args.username } }
    //     );

    //     const token = signToken(user);
    //     return { token, user };
    //   }
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    deleteFriend: async (parent, { username, friend }) => {
      return User.findOneAndUpdate(
        { username: username},
        { $pull: {friends: {friend}}},
        { new: true}
      );
    }
  },
};

module.exports = resolvers;