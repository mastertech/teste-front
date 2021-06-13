import React, { FC } from 'react';

// import styles from '../styles/components.module.scss';
import LoginForm from './login-form';

const LoginView: FC = () => {
  return (
    <main className="container">
      <div className="card">
        <p>LOGIN</p>
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginView;
