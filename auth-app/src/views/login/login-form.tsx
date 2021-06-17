import React, { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';

import { Button, TextInput } from '../../components';
import { useAuthContext } from '../../hooks';

const LoginForm = () => {
  const { isLoading, signIn } = useAuthContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOnSubmit = async () => {
    if (!email || !password) toast.error('Informe o seu email e a senha!');
    else await signIn({ email, password });
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <TextInput
        label="Email"
        defaultValue={email}
        placeholder="seunome@exemplo.com"
        onChange={handleChangeEmail}
      />
      <TextInput
        type="password"
        label="Senha"
        defaultValue={password}
        placeholder="*********"
        onChange={handleChangePassword}
      />
      <p style={{ textAlign: 'center' }}>
        <Button isLoading={isLoading} onClick={handleOnSubmit}>
          Entrar
        </Button>
      </p>
    </div>
  );
};

export default LoginForm;
