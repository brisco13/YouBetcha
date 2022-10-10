const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    username: String!
    profilePic: String
    email: String!
    password: String!
    bets: [Bet]
    comments: [Comment]
    reactions: [Reaction]
    # is this how friends should be?
    friends: [User]
  }

  type Bet {
    _id: ID
    desc: String!
    # check more on this?
    participants: [String]
    createdAt: String
    comments: [Comment]
    winner: [User]
    reactions: [Reaction]
    postImage: String
  }

  type Comment {
    _id: ID
    commentText: String!
    commentAuthor: String!
    createdAt: String
  }

  type Reaction{
    reactionID: ID
    # do these need to be required?
    reactionBody: String!
    username: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input BetInput {
    betId: String!
    desc: String! 
    participants: [String]!
    postImage: String
    # check later
    winner: String
  }

type Query {
    users: [User]
    me: User
    user(username: String!): User
    getBets: [Bet]
    getSingleBet(betId: ID!): Bet
    # userBets(username: String): [Bet] - this may not work the way we want it
    bet_Reactions(betId: ID): [Reaction]
    friendBets(friends: [String]): [Bet]
    comments(betId: ID): [Comment]
    # comm_Reactions(commentId: ID): [Reaction]
    friends(username: String!): [User]
  }

  type Mutation {
    addUser(name: String!, username: String!, email: String!, password: String!, profilePic: String): Auth
    login(email: String!, password: String!): Auth
    updateUser( profilePic: String): Auth
    addBet(betData: BetInput): Bet
    updateBet(betData: BetInput): Bet
    deleteBet(betId: ID!): Bet
    addComment(betId: ID!, commentText: String!, commentAuthor: String!): Comment
    deleteComment(commentId: ID!): Comment
    betAddReaction(betId: ID!, reaction: String!, reactionAuthor: String!): Reaction
    commAddReaction(commentId: ID!, reaction: String!, reactionAuthor: String!): Reaction
    deleteReaction(reactionID: ID!): Reaction
    addFriend(username: String!): Auth
    deleteFriend(username: String!): Auth
  }
`;

module.exports = typeDefs;