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
  mutation addUser($username: String!, $email: String!, $password: String!, $profilePic: String!) {
    addUser(username: $username, email: $email, password: $password, profilePic: $profilePic) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($profilePic: String) {
    (profilePic: $profilePic) {
      token {
        user {
          _id
          username
        }
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

export const UPDATE_BET = gql`
  mutation updateBet($betId: String!) {
    updateBets(betId: $betId) {
      _id
    }
  }
`;

export const REMOVE_BET = gql`
  mutation removeBet($betId: String!) {
    removeBet(betId: $betId) {
      _id
    }
  }
`;

export const ADD_FRIEND = gql`
  mutation addFriend($username: String!) {
    addFriend(username: $username) {
      token
      user {
        friends
      }
    }
  }
`;

export const REMOVE_FRIEND = gql`
  mutation removeFriend($username: String!) {
    removeFriend(username: $username) {
      token
      user{
        friends
      }
    }
  }
`;

export const REMOVE_REACTIONS = gql`
  mutation removeReactions($_id: String!, $reactionBody: String!) {
    removeReactions(_id: $_id, reactionBody: $reactionBody) {
      _id
    }
  }
`;

export const REMOVE_COMMENTS = gql`
  mutation removeComments($_id: String!, $commentText: String!) {
    removeReactions(_id: $_id, commentText: $commentText) {
      _id
    }
  }
`;