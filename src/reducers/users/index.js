import { combineReducers } from 'redux';
import data from './data';
import loading from './loading';
import error from './error';

export default combineReducers({
  data,
  loading,
  error,
});
