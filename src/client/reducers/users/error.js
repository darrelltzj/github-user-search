import {
  USERS_LOADING,
  USERS_FAILED,
  USERS_SEARCHED,
  USER_SEARCHED,
} from '../../actions/user';

const INITIAL_STATE = null;

const error = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_LOADING:
      return null;
    case USERS_FAILED:
      return action.error;
    case USERS_SEARCHED:
      return null;
    case USER_SEARCHED:
      return null;
    default:
      return state;
  }
};

export default error;
