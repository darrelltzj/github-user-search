import { FOLLOWINGS_SEARCHED } from '../types';

const INITIAL_STATE = 1;

const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FOLLOWINGS_SEARCHED:
      return +action.page;
    default:
      return state;
  }
};

export default data;
