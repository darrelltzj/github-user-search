import { combineReducers } from 'redux';
import users from './users';
import repos from './repos';

const root = combineReducers({
  users,
  repos,
});

export default root;
