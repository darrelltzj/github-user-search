import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../client/reducers/index';

export const sagaMiddleware = createSagaMiddleware();

export const store = () => createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
);
