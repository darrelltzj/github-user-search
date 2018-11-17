import {
  FOLLOWERS_LOADING,
  FOLLOWERS_FAILED,
  FOLLOWERS_SEARCHED,
} from '../../actions/follower';

const INITIAL_STATE = null;

const loading = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FOLLOWERS_LOADING:
      return action.message || 'Searching...';
    case FOLLOWERS_FAILED:
      return null;
    case FOLLOWERS_SEARCHED:
      return null;
    default:
      return state;
  }
};

export default loading;
