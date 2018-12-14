import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { ServerStyleSheet } from 'styled-components';
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';

import path from 'path';
import { ChunkExtractor } from '@loadable/server';

import Routes from '../client/Routes';

const statsFile = path.resolve(__dirname, '../../public/loadable-stats.json');

export default (req, store) => {
  const extractor = new ChunkExtractor({
    statsFile,
    entrypoints: [
      'main',
      // 'pages-Home',
      // 'pages-NotFound',
      'pages-User', // ???
    ],
  });

  const sheet = new ServerStyleSheet();

  const content = renderToString(
    sheet.collectStyles(
      extractor.collectChunks(
        <Provider store={store}>
          <StaticRouter
            location={req.path}
            context={{}}
          >
            {renderRoutes(Routes)}
          </StaticRouter>
        </Provider>,
      ),
    ),
  );

  const helmet = Helmet.renderStatic();

  const linkTags = extractor.getLinkTags();

  const styles = sheet.getStyleTags();

  const scriptTags = extractor.getScriptTags();

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${linkTags}
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
        ${scriptTags}
      </body>
    </html>
  `;
  // <script src="/index.js"></script>
};
