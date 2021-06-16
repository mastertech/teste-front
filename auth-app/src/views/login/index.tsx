import React, { FC } from 'react';

import LoginForm from './login-form';

const LoginView: FC = () => {
  return (
    <main className="container">
      <div className="card">
        <h1>LOGIN</h1>
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginView;
