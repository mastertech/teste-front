import React, { useState } from 'react';
import { Redirect } from 'react-router';
import getProfile from '../../services/api';

import './style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(false);

  const loginAction = async (e) => {
    e.preventDefault();
    const result = await getProfile(email, password);
    console.log(result);
    if (result) {
      setUser(result);
    }
  };
  return (
    <form className="login-form" type="POST">
      {user && (
        <Redirect
          to={{
            pathname: '/profile',
            state: { data: user },
          }}
        />
      )}
      <h3>Login</h3>
      <label>
        E-mail
        <input
          type="email"
          placeholder="email@email.com"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        ></input>
      </label>
      <label>
        Senha
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        ></input>
      </label>
      <button type="submit" onClick={(e) => loginAction(e)}>
        Entrar
      </button>
    </form>
  );
};

export default Login;
