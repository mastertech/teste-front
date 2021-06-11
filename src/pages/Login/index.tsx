import { useState, useContext } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';

import { LoginUI } from './LoginUI';
import { fetchUserData } from '../../adapters/login';
import { UserContext } from '../../context/UserContext';

export const Login = ({ history }: RouteComponentProps) => {
  const { user, login } = useContext(UserContext);

  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const [error, setError] = useState('');

  const handleInput = (event: any) => {
    const input = event.target;
    setLoginData(data => ({ ...data, [input.name]: input.value }))
  }

  const handleLogin = async () => {
    try {
      const user = await fetchUserData(loginData);
      
      login(user, () => {
        history.replace('/');
      });
    } catch (err) {
      setError('Erro inesperado, tente novamente mais tarde.');
    }
  };

  if (user) return <Redirect to="/" />

  return <LoginUI error={error} data={loginData} handleLogin={handleLogin} handleInput={handleInput} />
};