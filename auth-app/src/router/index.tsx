import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Routes } from '../constants';
import { useAuthContext } from '../hooks';
import NotFoundPage from '../pages/404';
import LoginPage from '../pages/login';
import ProfilePage from '../pages/profile';

export const Router = () => {
  const { isLoading, isLogged, retrieveUserData } = useAuthContext();

  useEffect(() => {
    retrieveUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <p>Loading...</p>;

  /**
   *
  if (!isLogged)
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to={Routes.Login} />} />
        <Route path={Routes.Login} component={LoginPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    );
   */

  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to={Routes.Profile} />} />
      <Route path={Routes.Login} component={LoginPage} />
      <Route path={Routes.Profile} component={ProfilePage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  );
};

export default Router;
