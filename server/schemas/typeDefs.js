const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type file1 {
    attribute1: String
    attribute2: String
    attribute3: String
    attribute4: String
  }
  type file2 {
    attribute1: String
    attribute2: String
    attribute3: String
    attribute4: String
  }
  type Query {
    query1: [file1]
    query2: [file2]
  }
  type Mutation {
    mutation1(attribute1: String!, attribute3: String!): file2
    mutation2(attribute1: String!, attribute3: String!): file2
  }
`;

module.exports = typeDefs;