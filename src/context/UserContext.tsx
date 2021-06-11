import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { IUser } from '../@types/IUser';
import { getItemFromLocalStorage, setItemOnLocalStorage } from '../helpers/localStorage';

type IUserContext = {
  user: IUser | null;
  login: (userData: IUser) => void;
  logout: () => void;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    getUserFromLocalStorage();
  }, [])

  const getUserFromLocalStorage = () => {
    const stringifiedData = localStorage.getItem('user');
    const user = stringifiedData ? JSON.parse(stringifiedData) : null;

    setUser(user);
  }

  const login = (userData: IUser) => {
    setItemOnLocalStorage('user', userData);
    setUser(userData);
  }

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      { children }
    </UserContext.Provider>
  )
}