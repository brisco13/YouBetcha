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
  mutation addBet($betText: String!, $betAuthor: String!) {
    addBet(betText: $betText, betAuthor: $betAuthor) {
      _id 
      betDescription
      betAuthor
      createdAt
      comments{
        _id   
        body
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment(
    $betId: ID!
    $body: String!
    $commentAuthor: String!
  ) {
    addComment(
      betId: $betId
      body: $body
      commentAuthor: $commentAuthor
      )
      _id
      betDescription
      betAuthor
      createdAt
      comments{
        _id 
        body
      }
  }
`;