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
    friends: [user]
  }

  type Query {
    User: [user]:[user_id]
    Comments: [comment]
    Reactions: [reaction]
    Bets: [bet]:[bet_id]
  }

  type Mutation {
    createUser: 
    mutation1(comment: String!, user_id: String!): 
   
  }
`;

module.exports = typeDefs;
