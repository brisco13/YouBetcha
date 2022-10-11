import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      profilePic
      bets {
        _id
        participants
        betAuthor
        desc
        createdAt
        postImage
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
      email
      profilePic
      bets {
        _id
        participants
        betAuthor
        desc
        createdAt
        postImage
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      profilePic
      friends
      bets {
        _id
        betAuthor
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
    getBets {
      _id
      betAuthor
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
  query getSingleBet($betId: String!) {
    getSingleBet(betId: $betId) {
      _id
      participants
      betAuthor
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
  query friends($friends: String!) { 
    friends(friends: $friends) {
      _id
      participants
      betAuthor
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

export const QUERY_FRIENDS_BETS = gql`
  query friendsBets($friends: [String]) {
    friendsBets(friends: $friends) {
      _id
      participants
      betAuthor
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
