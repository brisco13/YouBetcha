import { useReducer } from 'react';
import {
  UPDATE_PERSONAL_BETS, UPDATE_FRIENDS_BETS, UPDATE_PROFILE_PIC, UPDATE_PROFILE
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PERSONAL_BETS:
      return {
        ...state,
        bets: [...action.bets],
      };
    case UPDATE_FRIENDS_BETS: 
      return { 
        ...state,
        friendsBets: [...action.friendsBets],
      }
    case UPDATE_PROFILE_PIC:
      return { 
        ...state,
        profilePic: [...action.profilePic],
      }
    case UPDATE_PROFILE:
      return { 
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
};

export function useProfileReducer(initialState) {
  return useReducer(reducer, initialState)
};