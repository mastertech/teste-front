import userEvent from '@testing-library/user-event';
import { FormEvent, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';
import { api } from '../../services/api';
import './styles.scss'

interface User {
  birthday: Date;
  email: string;
  gender: string;
  id: number;
  name: string;
  state: string;
  avatar: string;
}
// {
//   "birthday": "1996-04-10",
//   "email": "teste@front.com",
//   "gender": "FEMALE",
//   "id": 1,
//   "name": "Grace Hopper",
//   "state": "SP",
//   "avatar": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/1200px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg"
// }

// email -> teste@front.com
// password -> teste123


function Login() {
  const history = useHistory()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const user: User = await api.post('user/login', {
        email,
        password
      }).then(response => response.data);

      // [ ] save user info in a context before redirect
      // [ ] create dashboard page, and redirect user
      // history.push('/dashboard')

    } catch {
      setEmail('');
      setPassword('');
      setIsLoading(false);
      return;
    }
  }

  return (
    <div className='container'>
      <Helmet>
        <title>Test | Login</title>
      </Helmet>
      <div className='content'>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className='input-and-label'>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="mail@example.com"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </div>

          <div className='input-and-label'>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={password}
              onChange={event => setPassword(event.target.value)}
            />
          </div>

          <button type="submit">{isLoading ? 'Aguarde...' : 'Login'}</button>

        </form>
      </div>
    </div>
  );
}

export default Login;
