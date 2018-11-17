import {
  FOLLOWINGS_LOADING,
  FOLLOWINGS_FAILED,
  FOLLOWINGS_SEARCHED,
} from '../../actions/following';

const INITIAL_STATE = null;

const error = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FOLLOWINGS_LOADING:
      return null;
    case FOLLOWINGS_FAILED:
      return action.error;
    case FOLLOWINGS_SEARCHED:
      return null;
    default:
      return state;
  }
};

export default error;
