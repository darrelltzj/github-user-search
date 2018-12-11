import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { ServerStyleSheet } from 'styled-components';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';

import Routes from '../client/Routes';

export default (req, store) => {
  const sheet = new ServerStyleSheet();

  const content = renderToString(sheet.collectStyles(
    <Provider store={store}>
      <StaticRouter
        location={req.path}
        context={{}}
      >
        {renderRoutes(Routes)}
      </StaticRouter>
    </Provider>,
  ));

  const helmet = Helmet.renderStatic();

  const styles = sheet.getStyleTags();

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <link rel="shortcut icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">
        <title>Github User Search</title>
        ${styles}
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
        <script>
          window.INITIAL_STATE = ${serialize(store.getState())}
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `;
};
