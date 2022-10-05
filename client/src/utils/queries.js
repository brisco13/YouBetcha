import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id 
      username
      email
      bets {
        betText
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
      betText
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
      betText
      betAuthor
      createdAt 
      comments {
        _id 
        commentText 
      }
    }
  }
`;