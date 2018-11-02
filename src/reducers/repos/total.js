import { USER_SEARCHED } from '../types';

const INITIAL_STATE = 0;

const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_SEARCHED:
      return action.repos;
    default:
      return state;
  }
};

export default data;
