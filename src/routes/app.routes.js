import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Layout from '../components/Layout';

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/" component={Home}/>
                </Layout>
            </Switch>
        </BrowserRouter>
    );
};