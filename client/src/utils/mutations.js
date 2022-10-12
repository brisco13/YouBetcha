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
  mutation addUser($name: String!, $username: String!, $email: String!, $password: String!, $profilePic: String) {
    addUser(name: $name, username: $username, email: $email, password: $password, profilePic: $profilePic) {
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
    updateUser(profilePic: $profilePic) {
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
  mutation addBet($desc: String!, $participants: String!) { 
    addBet(desc: $desc, participants: $participants) {
      _id 
      desc
      participants
      createdAt
      winner
      # loser
      # comments{
      #   _id   
      #   commentText
      #   commentAuthor
      # }
      # reactions {
      #   _id
      #   reactionBody
      # }
    }
  }
`;

// export const ADD_REACTIONS = gql`
//   mutation addReactions(
//     $betId: ID!
//     $reactionBody: String!
//     $username: String!
//   ) {
//     # addReaction(
//     #   betId: $betId
//     #   reactionBody: $reactionBody
//     #   username: $username
//     #   )
//     #   _id
//     #   desc
//     #   createdAt
//     #   comments{
//     #     _id 
//     #     commentText
//     #     commentAuthor
//     #   }
//   }
// `;

export const UPDATE_BET = gql`
  mutation updateBet($betId: String!) {
    updateBets(betId: $betId) {
      _id
    }
  }
`;

export const DELETE_BET = gql`
  mutation deleteBet($betId: String!) {
    deleteBet(betId: $betId) {
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

export const DELETE_FRIEND = gql`
  mutation deleteFriend($username: String!) {
    deleteFriend(username: $username) {
      token
      user{
        friends
      }
    }
  }
`;

// export const DELETE_REACTIONS = gql`
//   mutation deleteReactions($_id: String!, $reactionBody: String!) {
//     deleteReactions(_id: $_id, reactionBody: $reactionBody) {
//       _id
//     }
//   }
// `;

// export const ADD_COMMENT = gql`
//   mutation addComment($_id: String!, $commentText: String!, $commentAuthor: String!) {
//     addComment(id: $id, commentText: $commentText) {
//       _id
//     }
//   }
// `;

// export const DELETE_COMMENTS = gql`
//   mutation deleteComments($_id: String!) {
//     deleteComents(_id: $_id) {
//       _id
//     }
//   }
// `;

