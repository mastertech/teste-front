import { ElementType } from 'react';
import { Redirect } from 'react-router-dom';
import { verifyAuth } from '../helpers/auth';

export const withAuth = (Component: ElementType, redirectTo = '/login') => {
  const Wrapper = (props: unknown) => {
    const isAuthorized = verifyAuth();

    if (isAuthorized) return <Component {...props} />

    return <Redirect to={redirectTo} />
  }

  return Wrapper;
}