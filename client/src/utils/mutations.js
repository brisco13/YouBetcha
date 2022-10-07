import { gql } from "@apollo/client";

//connects to the useQuery this matches up with the typeDefs main Query field, call it Query_<name>
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_BET = gql`
  mutation addBet($betText: String!, $participants: String!) { 
    addBet(desc: $desc, 
    participants: $participants) {
      _id 
      desc
      createdAt
      winner
      # loser
      comments{
        _id   
        commentText
        commentAuthor
      }
      reactions {
        _id
        reactionBody
      }
    }
  }
`;

export const ADD_REACTIONS = gql`
  mutation addReactions(
    $betId: ID!
    $reactionBody: String!
    $username: String!
  ) {
    addReaction(
      betId: $betId
      reactionBody: $reactionBody
      username: $username
      )
      _id
      desc
      createdAt
      comments{
        _id 
        commentText
        commentAuthor
      }
  }
`;