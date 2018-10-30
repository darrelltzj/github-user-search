import {
  USERS_SEARCHED,
  USER_SEARCHED,
} from '../types';

const INITIAL_STATE = 0;

const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_SEARCHED:
      return +action.total;
    case USER_SEARCHED:
      return 1;
    default:
      return state;
  }
};

export default data;
