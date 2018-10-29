import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import root from './reducers/index';

export default () => createStore(root, {}, applyMiddleware(thunk));
