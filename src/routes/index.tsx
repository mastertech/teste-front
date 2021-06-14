import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './protectedRoute';

import SignIn from '../pages/signin';
import Dashboard from '../pages/dashboard';

const Routes: FC = () => (
    <Switch>
        <Route path="/entrar" exact component={SignIn} />
        <ProtectedRoute isAuthenticated exact component={Dashboard} />
    </Switch>
);

export default Routes;
