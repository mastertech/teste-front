import { Switch } from 'react-router-dom';
import Login from '../pages/Login/index';
import Dashboard from '../pages/Dashboard/index';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Login} />
    <Route path='/dashboard' exact component={Dashboard} />
  </Switch>
);

export default Routes;
