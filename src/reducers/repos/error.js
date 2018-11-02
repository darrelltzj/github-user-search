import {
  REPOS_LOADING,
  REPOS_FAILED,
  REPOS_SEARCHED,
} from '../types';

const INITIAL_STATE = null;

const error = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REPOS_LOADING:
      return null;
    case REPOS_FAILED:
      return action.error;
    case REPOS_SEARCHED:
      return null;
    default:
      return state;
  }
};

export default error;
