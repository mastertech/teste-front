import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/SignIn';
import UserProfile from '../pages/UserProfile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/user-profile" component={UserProfile} isPrivate />
      <Route path="/" component={() => <h1>Error 404: Page not found!</h1>} />
    </Switch>
  );
}
