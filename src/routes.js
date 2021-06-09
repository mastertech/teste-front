import { Route, Switch } from 'react-router';
import Login from './pages/login';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  );
};
export default Routes;
