import {
  FOLLOWERS_LOADING,
  FOLLOWERS_FAILED,
  FOLLOWERS_SEARCHED,
} from '../types';

const INITIAL_STATE = null;

const error = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FOLLOWERS_LOADING:
      return null;
    case FOLLOWERS_FAILED:
      return action.error;
    case FOLLOWERS_SEARCHED:
      return null;
    default:
      return state;
  }
};

export default error;
