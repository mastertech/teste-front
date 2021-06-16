import React from 'react';
import { Switch } from 'react-router-dom';

import { Routes } from '../constants';
import NotFoundPage from '../pages/404';
import LoginPage from '../pages/login';
import ProfilePage from '../pages/profile';
import Route from './route';

export const Router = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route path={Routes.Login} component={LoginPage} />
    <Route withAuthGuard path={Routes.Profile} component={ProfilePage} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);

export default Router;
