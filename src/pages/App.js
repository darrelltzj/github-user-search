import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../components/containers/Header';
import Footer from '../components/containers/Footer';
import Home from './Home';
import User from './User';

const StyledPage = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 96vh;
`;

export default function () {
  return (
    <StyledPage>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/users/:username" component={User} />
      </Switch>

      <Footer />
    </StyledPage>
  );
}
