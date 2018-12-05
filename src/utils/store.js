import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import reducers from '../client/reducers/index';

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  return {
    ...store,
    runSaga: sagaMiddleware.run,
    close: () => store.dispatch(END),
  };
}
