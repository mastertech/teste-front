import { Route,Switch,Redirect } from 'react-router-dom'
import User from '../components/user/User'
import Login from '../components/auth/Login'
import PrivateRoute from './PrivateRoute';
import './app.css'

function App() {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/user"  component={User} />
        <Redirect from="*" to="/" />
      </Switch>
    </div>

  );
}

export default App;
