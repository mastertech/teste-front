import React, { useState, createContext, useContext } from 'react';
import api from '../services/api';

export const AuthContext = createContext({});

export function AuthProvider(props) {
  const [userData, setUserData] = useState(() => {
    const user = localStorage.getItem('user');

    if (user) {
      return JSON.parse(user);
    }
    return null;
  });

  async function getUserData({ email, password }) {
    try {
      const { data } = await api.post('/user/login', {
        email,
        password,
      });
      localStorage.setItem('user', JSON.stringify(data));
      setUserData(data);
    } catch {
      alert('Usuário não encontrado! Verifique suas credenciais.');
    }
  }

  function signOut() {
    localStorage.removeItem('user');
    setUserData(null);
  }

  return (
    <AuthContext.Provider
      value={{
        userData,
        getUserData,
        signOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
