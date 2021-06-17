import React, { ComponentType, FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { Routes } from '../constants';
import { useAuthContext } from '../hooks';

const PrivateRoute: FC<
  RouteProps & {
    component: ComponentType;
  }
> = ({ component: Component, ...rest }) => {
  const { isLogged } = useAuthContext();
  return (
    <Route
      {...rest}
      render={props =>
        isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: Routes.Login,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
