import { Route, Switch } from 'react-router';
import Login from './pages/login';
import Profile from './pages/profile';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/profile" component={Profile} />
    </Switch>
  );
};
export default Routes;
