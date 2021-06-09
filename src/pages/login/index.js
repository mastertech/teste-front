import React from 'react';
import './style.css';

const Login = () => {
  return (
    <form className="login-form" type="POST">
      <h3>Login</h3>
      <label>
        E-mail
        <input type="email" placeholder="email@email.com"></input>
      </label>
      <label>
        Senha
        <input type="password" placeholder="password"></input>
      </label>
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Login;
