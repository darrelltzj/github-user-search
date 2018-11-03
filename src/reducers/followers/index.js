import { combineReducers } from 'redux';
import data from './data';
import loading from './loading';
import error from './error';
import page from './page';
import total from './total';

export default combineReducers({
  data,
  loading,
  error,
  page,
  total,
});
