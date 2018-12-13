import '@babel/polyfill';
import 'dotenv/config';
import express from 'express';
// import proxy from 'express-http-proxy';
import expressStaticGzip from 'express-static-gzip';

import renderer from './utils/renderer';
import configureStore from './utils/store';
import rootSaga from './client/sagas/index';

const app = express();

// PROXY ???
// app.use(
//   '/api',
//   proxy('https://api.github.com', {
//     proxyReqOptDecorator(opts) {
//       opts.headers['x-forwarded-host'] = 'localhost:3000';
//       return opts;
//     },
//   })
// );

app.use(expressStaticGzip('public', {
  enableBrotli: true,
  orderPreference: ['br'],
}));

// app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = configureStore();

  store.runSaga(rootSaga).done.then(() => {
    res.status(200).send(renderer(req, store));
  });

  renderer(req, store);

  store.close();
});

app.set('PORT', process.env.PORT);

app.listen(app.get('PORT'));
