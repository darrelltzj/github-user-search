import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import configureStore from './store';

import Home from './components/containers/Home';
import User from './components/containers/User';
import Main from './components/layouts/Main';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import A from './components/atoms/A';
import Span from './components/atoms/Span';

const store = configureStore();

export default function () {
  return (
    <Main>
      <Header>
        <A href="/" color="#fff">
          <h1>Github Users</h1>
        </A>
      </Header>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/users/:username" component={User} />
          </Switch>
        </Router>
      </Provider>
      <Footer>
        <Span color="#777">
          Designed by
          {' '}
          <A
            href="https://www.darrelltzj.com/"
            target="_blank"
            rel="noopener noreferrer"
            color="#777"
          >
            DarrellTZJ
          </A>
        </Span>
      </Footer>
    </Main>
  );
}
