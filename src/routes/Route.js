import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../providers/auth';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const { userData } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return isPrivate === !!userData ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/user-profile',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}
