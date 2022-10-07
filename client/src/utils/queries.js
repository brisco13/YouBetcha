import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id 
      username
      email
      friends
      bets {
        _id
        participants
        # betAuthor
        desc
        createdAt
        comments {
          _id
          commentText
          commentAuthor
        }
        winner
        reactions {
          _id
          reactionBody
          # reactionAuthor
        } 
      }
    }
  }
`;


export const QUERY_BETS = gql`
  query getBets {
    bets {
      _id 
      participants
      desc
      # feel like we need a bet author here? betAuthor
      createdAt 
      winner
      reactions {
        _id 
        reactionBody 
        # reactionAuthor
        createdAt
      }
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_BET = gql`
  query getSingleBet($betId: ID!) {
    bet(betId: $betId) {
      _id 
      participants
      desc
      # betAuthor
      createdAt 
      winner
      reactions {
        _id 
        reactionBody 
        # reactionAuthor
        createdAt
      }
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }

    }
  }
`;