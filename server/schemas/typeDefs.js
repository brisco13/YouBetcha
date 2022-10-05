const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type bet {
    id: ID!
    user_id: [user.id]
    headline: String
    terms: String!
    image: String!
    comment: [comment]
    winner: [winner]
    loser: [user]
  }

  type comment {
    bet: ID!
    user: [user.id]
    betID: String
    body: String
    reaction: [reaction]
  }
  type reaction {
    id: ID
    commentId: String
    object: char
    user: [user.id]
  }

  type user {
    id: ID!
    username: String!
    password: String!
    email: String!
    winCount: String
    betCount: Num
    bets: [bet]
    friends: [users]
  }

  type Query {
    User: [user]
    Comments: [comment]
    Reactions: [reaction]
    Bets: [bet]
  }

  type Mutation {
    mutation1(comment: String!, user_id: String!): 
   
  }
`;

module.exports = typeDefs;
