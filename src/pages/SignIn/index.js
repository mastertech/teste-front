import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import { useAuth } from '../../providers/auth';
import styles from './styles.module.scss';

export default function SignIn() {
  const { getUserData } = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    getUserData({ email, password });
    history.push('/user-profile');
  }

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Login</h1>

        <label>E-mail</label>
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Senha</label>
        <input
          name="password"
          type="password"
          placeholder="Senha"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className={styles.button}>
          <Button title="Login" />
        </div>
      </form>
    </div>
  );
}
