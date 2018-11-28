import { FOLLOWERS_SEARCHED } from '../../actions/follower';

const INITIAL_STATE = [];

const data = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FOLLOWERS_SEARCHED:
      return action.data;
    default:
      return state;
  }
};

export default data;
