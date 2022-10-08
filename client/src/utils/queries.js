import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id 
      username
      email
      profilePic
      friends
      bets {
        _id
        participants
        desc
        createdAt
        postImage
        comments {
          _id
          commentText
          commentAuthor
        }
        winner
        reactions {
          _id
          reactionBody
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
      postImage
      createdAt 
      winner
      reactions {
        _id 
        reactionBody 
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
      createdAt 
      postImage
      winner
      reactions {
        _id 
        reactionBody 
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

export const QUERY_FRIENDS = gql`
  query {
    friends {
      _id
      username
    }
  }
`;