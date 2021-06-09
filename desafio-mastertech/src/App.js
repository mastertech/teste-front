import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppProvider } from './context/AppContext';

import './App.css';
import Login from './pages/login/Login';
import User from './pages/user/User';

const App = () => (
  <BrowserRouter>
    <AppProvider>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/user" component={User} />
      </Switch>
    </AppProvider>
  </BrowserRouter>
);

export default App;