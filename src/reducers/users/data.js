import {
  USERS_SEARCHED,
  USER_SEARCHED,
} from '../types';

const INITIAL_STATE = [];

const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_SEARCHED:
      return action.data;
    case USER_SEARCHED:
      return [action.data];
    default:
      return state;
  }
};

export default data;
