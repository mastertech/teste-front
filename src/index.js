import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './provider/AuthProvider'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './app/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


