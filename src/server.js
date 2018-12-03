import 'babel-polyfill';
import express from 'express';

import renderer from './utils/renderer';
import configureStore from './utils/store';
import rootSaga from './client/sagas/index';

const app = express();

app.use(express.static('public'));

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
