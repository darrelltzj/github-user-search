import 'babel-polyfill';
import express from 'express';
// import { matchRoutes } from 'react-router-config';

import renderer from './utils/renderer';
import { store } from './utils/store';
// import Routes from './client/Routes';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const configureStore = store();

  // const promises = matchRoutes(Routes, req.path).map(
  //   ({ route }) => route.loadData && route.loadData(store),
  // );

  // Promise.all(promises).then(() => {
  res.send(renderer(req, configureStore));
  // });
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
