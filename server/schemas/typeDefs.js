const { gql } = require('apollo-server-express');
const { Bet, Reaction, User } = require('../models');
// const mongoose = require(“mongoose”);
const typeDefs = gql`
  type User {
    _id: ID
    name: String!
    username: String!
    profilePic: String
    email: String!
    password: String!
    friends: [User]
    bets: [Bet]
    comments: [Comment]
    reactions: [Reaction]
  }

  type Bet {
    _id: ID
    desc: String!
    participants: [User!]!
    createdAt: String!
    comments: [Comment]!
    winner: [User]!
    reactions: [Reaction]
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Reaction{
    reactionID: ID
    reactionBody: String!
    username: String!
    createdAt: String!
  }

  type Auth {
    token: ID!
    user: User
  }

type Query {
    users: [User]
    user(username: String!): User
    Comments(betId: ID): [Comment!]!
    Comm_Reactions(commentId: ID): [Reaction]
    Bet_Reactions(betId: ID): [Reaction]
    Bets(betId: ID!): Bet
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBet(desc: String!, participants: [User!]!): Bet
    updateBet(betId: ID!, desc: String, participants: [User], comments: [Comment], winner: [User]): Bet
    deleteBet(betId: ID!): Bet
    addComment(betId: ID!): Comment
    deleteComment(commentId: ID!): Comment
    betAddReaction(betId: ID!): Reaction
    commAddReaction(commentId: ID!): Reaction
    deleteReaction(reactionID: ID!): Reaction
    addFriend(username: String!): User
    deleteFriend(username: String!): User
    getFriends(username: String!): [User]
  }
`;

module.exports = typeDefs;