import React, { ChangeEvent, useState } from 'react';

import { Button, TextInput } from '../../components';
import { useAuthContext } from '../../hooks';

const LoginForm = () => {
  const { isLoading, signIn } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = () => {
    signIn({ email, password });
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <TextInput
        label="Email"
        placeholder="seunome@exemplo.com"
        onChange={handleChangeEmail}
      />
      <TextInput
        label="Senha"
        placeholder="*********"
        onChange={handleChangePassword}
      />
      <Button isLoading={isLoading}>Entrar</Button>
    </form>
  );
};

export default LoginForm;
