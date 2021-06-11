import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { IUser } from '../@types/IUser';
import { setItemOnLocalStorage } from '../helpers/localStorage';

type IUserContext = {
  user: IUser | null;
  login: (userData: IUser, cb: () => void) => void;
  logout: (cb: () => void) => void;
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

  const login = (userData: IUser, cb: () => void) => {
    setItemOnLocalStorage('user', userData);
    setUser(userData);

    cb();
  }

  const logout = (cb: () => void) => {
    localStorage.removeItem('user');
    setUser(null);

    cb();
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      { children }
    </UserContext.Provider>
  )
}