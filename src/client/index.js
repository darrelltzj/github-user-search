/* global window document */
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import reducers from './reducers/index';
import rootSaga from './sagas/index';
import Routes from './Routes';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(Routes)}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
