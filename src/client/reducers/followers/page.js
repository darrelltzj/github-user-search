import { FOLLOWERS_SEARCHED } from '../../actions/follower';

const INITIAL_STATE = 1;

const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FOLLOWERS_SEARCHED:
      return +action.page;
    default:
      return state;
  }
};

export default data;
