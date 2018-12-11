import React from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import theme from './themes/index';
import GlobalStyle from './components/layouts/Global';
import Header from './components/containers/Header';
import Footer from './components/containers/Footer';

const StyledPage = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 96vh;
`;

const App = ({ route }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyle />
      <StyledPage>
        <Header />
        <Switch>
          {renderRoutes(route.routes)}
        </Switch>
        <Footer />
      </StyledPage>
    </React.Fragment>
  </ThemeProvider>
);

App.propTypes = {
  route: PropTypes.shape({}),
};

App.defaultProps = {
  route: {},
};

export default App;
