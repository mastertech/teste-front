import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LogIn from '../pages/LogIn';
import Layout from '../components/Layout';

export default function AuthRoutes() {
    return(
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route path="/" component={LogIn} />
                </Layout>
            </Switch>
        </BrowserRouter>
    );
};