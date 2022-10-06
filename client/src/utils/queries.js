import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id 
      username
      email
      bets {
        betDescription
        betAuthor
        betFriend
        createdAt 
      }
    }
  }
`;


export const QUERY_BETS = gql`
  query getBets {
    bets {
      _id 
      betDescription
      betAuthor
      betFriend
      createdAt 
    }
  }
`;

export const QUERY_SINGLE_BET = gql`
  query getSingleBet($betId: ID!) {
    bet(betId: $betId) {
      _id 
      betDescription
      betAuthor
      createdAt 
      comments {
        _id 
        body 
      }
    }
  }
`;