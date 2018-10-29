import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import configureStore from './store';

import Home from './containers/Home';
import User from './containers/User';
import Main from './components/layouts/Main';
import Footer from './components/layouts/Footer';
import A from './components/atoms/A';
import Span from './components/atoms/Span';

const store = configureStore();

export default function () {
  return (
    <Main>
      <header><h1>Github Users</h1></header>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/:username" component={User} />
          </Switch>
        </Router>
      </Provider>
      <Footer>
        <Span color="grey">
          Designed by
          {' '}
          <A
            href="https://www.darrelltzj.com/"
            target="_blank"
            rel="noopener noreferrer"
            color="grey"
          >
            DarrellTZJ
          </A>
        </Span>
      </Footer>
    </Main>
  );
}
