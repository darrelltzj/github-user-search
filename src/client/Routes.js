import withTransition from './components/hoc/withTransition';

import App from './App';
import Home from './pages/Home';
import User from './pages/User';

const Routers = [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: withTransition(Home),
        exact: true,
      },
      {
        path: '/users/:username',
        component: withTransition(User),
      },
    ],
  },
];

export default Routers;
