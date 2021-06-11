import { Switch, Route, Redirect } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { NotFound } from '../pages/NotFound'
import { Login } from '../pages/Login'
import { AuthRoute } from './AuthRoute'

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/login" />
      </Route>
      <Route path="/login" component={Login} exact />
      <AuthRoute path="/dashboard" component={Dashboard} exact />
      <Route component={NotFound} />
    </Switch>
  )
}
