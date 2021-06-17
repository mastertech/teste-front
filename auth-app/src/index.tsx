import 'react-toastify/dist/ReactToastify.css';
import './styles/global.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { AuthContextProvider } from './contexts/auth';
import Router from './router';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
        />
        <Router />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
