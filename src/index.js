/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { sagaMiddleware, store } from './store';
import rootSaga from './sagas/index';
import theme from './themes/index';
import GlobalStyle from './components/layouts/Global';
import App from './pages/App';

const configureStore = store();

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={configureStore}>
    <Router>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <App />
        </React.Fragment>
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
