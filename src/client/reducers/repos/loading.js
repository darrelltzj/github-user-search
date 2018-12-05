import {
  REPOS_LOADING,
  REPOS_FAILED,
  REPOS_SEARCHED,
} from '../../actions/repo';

const INITIAL_STATE = null;

const loading = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REPOS_LOADING:
      return action.message || 'Searching...';
    case REPOS_FAILED:
      return null;
    case REPOS_SEARCHED:
      return null;
    default:
      return state;
  }
};

export default loading;
