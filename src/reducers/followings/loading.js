import {
  FOLLOWINGS_LOADING,
  FOLLOWINGS_FAILED,
  FOLLOWINGS_SEARCHED,
} from '../types';

const INITIAL_STATE = null;

const loading = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FOLLOWINGS_LOADING:
      return action.message || 'Searching...';
    case FOLLOWINGS_FAILED:
      return null;
    case FOLLOWINGS_SEARCHED:
      return null;
    default:
      return state;
  }
};

export default loading;
