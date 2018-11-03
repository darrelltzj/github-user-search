import { FOLLOWINGS_SEARCHED } from '../types';

const INITIAL_STATE = [];

const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FOLLOWINGS_SEARCHED:
      return action.data;
    default:
      return state;
  }
};

export default data;
