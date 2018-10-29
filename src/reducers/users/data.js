import {
  USERS_SEARCHED,
  USER_SEARCHED,
} from '../types';

const INITIAL_STATE = [];

const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS_SEARCHED:
      return action.response;
    case USER_SEARCHED:
      return [action.response];
    default:
      return state;
  }
};

export default data;
