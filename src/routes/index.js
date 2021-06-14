import React from 'react';
import { useAuth } from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';


export default function Routes() {
    const { logged } = useAuth();
    
    return logged ? <AppRoutes/> : <AuthRoutes/>;
};