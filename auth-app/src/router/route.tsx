import React, { ComponentType, FC, useEffect } from 'react';
import {
  Redirect,
  Route as RouteRouterDom,
  RouteProps,
} from 'react-router-dom';

import { useAuthContext } from '../hooks';

const Route: FC<
  RouteProps & {
    withAuthGuard?: boolean;
    component: ComponentType;
  }
> = ({ component: Component, withAuthGuard, ...rest }) => {
  const { user  } = useAuthContext();

  useEffect(() => {
    (async () => {
      // await retrieveUserData();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RouteRouterDom
      {...rest}
      render={props =>
        withAuthGuard && user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default Route;
