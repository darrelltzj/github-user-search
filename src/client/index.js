/* global window document */
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import reducers from './reducers/index';
import rootSaga from './sagas/index';
import theme from './themes/index';
import GlobalStyle from './components/layouts/Global';
import Header from './components/containers/Header';
import Footer from './components/containers/Footer';
import Routes from './Routes';

// import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  window.INITIAL_STATE,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

const StyledPage = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 96vh;
`;

ReactDOM.hydrate(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <BrowserRouter>
          <StyledPage>
            <Header />

            <Switch>
              {renderRoutes(Routes)}
            </Switch>

            <Footer />
          </StyledPage>
        </BrowserRouter>
      </React.Fragment>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

// serviceWorker.register();
