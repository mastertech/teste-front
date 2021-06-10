import { Switch } from 'react-router-dom';
import Login from '../pages/Login/index';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Login} />
  </Switch>
);

export default Routes;
