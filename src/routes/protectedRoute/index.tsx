import { FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ProtectedRouteProps } from './types';

const ProtectedRoute: FC<ProtectedRouteProps> = ({
    isAuthenticated,
    ...routeProps
}) => {
    if (isAuthenticated) {
        return <Route {...routeProps} />;
    }

    return <Redirect to={{ pathname: '/entrar' }} />;
};

export default ProtectedRoute;
