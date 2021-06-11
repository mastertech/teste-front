import { useState, useContext } from 'react';
import { Redirect, RouteComponentProps } from 'react-router-dom';

import { LoginUI } from './LoginUI';
import { fetchUserData } from '../../adapters/login';
import { getFormData } from '../../helpers/form';
import { UserContext } from '../../context/UserContext';

export const Login = ({ history }: RouteComponentProps) => {
  const { user, login } = useContext(UserContext);

  const [error, setError] = useState('');

  const handleLogin = async (event: any) => {
    const data: any = getFormData(event);

    try {
      const user = await fetchUserData(data);
      
      login(user, () => {
        history.replace('/');
      });
    } catch (err) {
      setError('Erro inesperado, tente novamente mais tarde.');
    }
  };

  if (user) return <Redirect to="/" />

  return <LoginUI error={error} handleSubmit={handleLogin} />
};