import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Routes } from '../constants';
import { useAuthContext } from '../hooks';
import LoginPage from '../pages/login';
import ProfilePage from '../pages/profile';
import PrivateRoute from './private-route';

export const Router = () => {
  const { retrieveUserData } = useAuthContext();

  useEffect(() => {
    retrieveUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to={Routes.Profile} />} />
      <Route path={Routes.Login} component={LoginPage} />
      <PrivateRoute path={Routes.Profile} component={ProfilePage} />
      <Route path="*" render={() => <Redirect to="/" />} />
    </Switch>
  );
};

export default Router;
