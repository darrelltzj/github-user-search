import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import styled, { ThemeProvider, ServerStyleSheet } from 'styled-components';

import theme from '../client/themes/index';
import GlobalStyle from '../client/components/layouts/Global';
import Header from '../client/components/containers/Header';
import Footer from '../client/components/containers/Footer';
import Routes from '../client/Routes';

const StyledPage = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 96vh;
`;

export default (req, store) => {
  const sheet = new ServerStyleSheet();

  const content = renderToString(sheet.collectStyles(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <GlobalStyle />
          <StaticRouter location={req.path} context={{}}>
            <StyledPage>
              <Header />

              <Switch>
                {renderRoutes(Routes)}
              </Switch>

              <Footer />
            </StyledPage>
          </StaticRouter>
        </React.Fragment>
      </ThemeProvider>
    </Provider>,
  ));

  const styles = sheet.getStyleTags();

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <link rel="shortcut icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">
        <title>Github User Search</title>
        ${styles}
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
        <script src="/index.js"></script>
      </body>
    </html>
  `;
};
