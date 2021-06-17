import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Routes } from '../constants';
import { useAuthContext } from '../hooks';
import NotFoundPage from '../pages/404';
import LoginPage from '../pages/login';
import ProfilePage from '../pages/profile';
import PrivateRoute from './private-route';

export const Router = () => {
  

  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to={Routes.Profile} />} />
      <Route path={Routes.Login} component={LoginPage} />
      <PrivateRoute path={Routes.Profile} component={ProfilePage} />
      <Route path="*" component={LoginPage} />
    </Switch>
  );
};

export default Router;
