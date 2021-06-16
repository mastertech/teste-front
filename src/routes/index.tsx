/* eslint-disable react/jsx-indent-props */
import { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './protectedRoute';

import SignIn from '../pages/signin';
import Dashboard from '../pages/dashboard';

import { isEmpty } from '../pages/dashboard/utils';

const data = JSON.parse(localStorage.getItem('info') || '{}');

const Routes: FC = () => (
    <Switch>
        <Route path="/" exact component={SignIn} />
        <ProtectedRoute
            isAuthenticated={!isEmpty(data)}
            path="/painel"
            exact
            component={Dashboard}
        />
    </Switch>
);

export default Routes;
