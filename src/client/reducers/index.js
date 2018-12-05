import { combineReducers } from 'redux';
import users from './users';
import repos from './repos';
import followers from './followers';
import followings from './followings';

const root = combineReducers({
  users,
  repos,
  followers,
  followings,
});

export default root;
