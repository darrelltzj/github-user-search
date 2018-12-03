import withTransition from './components/hoc/withTransition';
import Home from './pages/Home';
import User from './pages/User';

const Routers = [
  {
    path: '/',
    component: withTransition(Home),
    exact: true,
  },
  {
    path: '/users/:username',
    component: withTransition(User),
  },
];

export default Routers;
