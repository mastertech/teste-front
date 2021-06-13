import React from 'react';
import { FormEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';
import Button from '../../components/Button';
import { useUser } from '../../contexts/UserContext';
import './styles.scss';

// email -> teste@front.com
// password -> teste123

function Login() {
  const { authUser, user } = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalidUser, setIsInvalidUser] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (user.email)
      history.push('/dashboard');
  }, [history, user.email]);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    try {
      await authUser(email, password);

      history.push('/dashboard');
      // [ ] create user as a context and save before redirect
      // [ ] create dashboard page, and redirect user

    } catch {
      setEmail('');
      setPassword('');
      setIsLoading(false);
      setIsInvalidUser(true);
      return;
    }
  }

  return (
    <div className='login-container'>
      <Helmet>
        <title>Test | Login</title>
      </Helmet>
      <main className='login-content'>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className='login-input-and-label'>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="mail@example.com"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div className='login-input-and-label'>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </div>

          <p>{isInvalidUser && 'Combinação de usuário e senha inválida!'}&nbsp;</p>

          <Button type='submit' loading={isLoading}>Login</Button>
        </form>
      </main>
    </div>
  );
}

export default Login;
