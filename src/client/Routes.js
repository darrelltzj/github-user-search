import loadable from '@loadable/component';

import withTransition from './components/hoc/withTransition';

import App from './App';
// import Home from './pages/Home';
// import User from './pages/User';
// import NotFound from './pages/NotFound';

const Home = loadable(() => import('./pages/Home'));
const User = loadable(() => import('./pages/User'));
const NotFound = loadable(() => import('./pages/NotFound'));

const Routers = [
  {
    component: App,
    routes: [{
      path: '/',
      exact: true,
      component: withTransition(Home),
    }, {
      path: '/users/:username',
      component: withTransition(User),
    }, {
      component: NotFound,
    }],
  },
];

export default Routers;
