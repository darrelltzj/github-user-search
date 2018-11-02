import { REPOS_SEARCHED } from '../types';

const INITIAL_STATE = [];

const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REPOS_SEARCHED:
      return action.data;
    default:
      return state;
  }
};

export default data;
