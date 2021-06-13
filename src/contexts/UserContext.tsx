import { createContext, ReactNode, useCallback, useContext, useState } from 'react';
import { api } from '../services/api';

interface User {
  birthday: Date;
  email: string;
  gender: string;
  id: number;
  name: string;
  state: string;
  avatar: string;
};

interface UserContextData {
  authUser: (email: string, password: string) => Promise<void>;
  signOut: () => void;
  user: User | null;
};

interface UserProviderProps {
  children: ReactNode;
}

const UserContext = createContext({} as UserContextData);

export function UserProvider({
  children,
}: UserProviderProps) {
  const [data, setData] = useState<User | null>(() => {
    const user = localStorage.getItem('@TestApp:user');

    if (user) {
      return JSON.parse(user);
    }

    return null;
  });

  const authUser = useCallback(async (email: string, password: string) => {
    const response = await api.post('user/login', {
      email,
      password,
    });

    const user = response.data;

    localStorage.setItem('@TestApp:user', JSON.stringify(user));

    setData(user);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@TestApp:user');

    setData(null);
  }, []);

  return (
    <UserContext.Provider value={{ user: data, authUser, signOut }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
