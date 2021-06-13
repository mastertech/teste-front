/* eslint-disable no-alert */
import React, {
  createContext,
  FC,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';

import { Routes, StorageKeys } from '../../constants';
import { IUser, LoginPayload } from '../../constants/types';
import { useIsMounted } from '../../hooks';
import { makeLogin } from '../../services';
import { AuthContextProps } from './auth.types';

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthContextProvider: FC = props => {
  const { push } = useHistory();
  const [user, setUser] = useState<IUser>();
  const [isLogged, setIsLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const isMounted = useIsMounted();

  /**
   * SignIn Action - get the credentials from user and make api request to login endpoint
   * - Get user data on success and saves it in storage and sets as logged.
   * @params Email: the user email
   * @params Password: the user secret password
   */
  const signIn = useCallback(
    async ({ email, password }: LoginPayload) => {
      if (isLoading) return;
      setIsLoading(true);
      try {
        const { data } = await makeLogin({ email, password });
        if (isMounted.current && data) {
          setUser(data);
          setIsLogged(true);
          localStorage.setItem(StorageKeys.USER_KEY, JSON.stringify(data));
          push(Routes.Profile);
        }
      } catch (error) {
        // eslint-disable-next-line no-alert
        if (error.code === 400) alert('Wrong Email or Password!');
      } finally {
        if (isMounted.current) setIsLoading(false);
      }
    },
    [isLoading, isMounted, push],
  );

  /**
   * Sing Out Action - clear the user data from the localstorage & sets as unlogged
   */
  const signOut = useCallback(async () => {
    setIsLoading(true);
    try {
      localStorage.removeItem(StorageKeys.USER_KEY);
      setIsLogged(false);
    } catch (error) {
      alert('Algo correu mal!');
    } finally {
      if (isMounted.current) {
        setIsLogged(false);
        setIsLoading(false);
        push(Routes.Login);
      }
    }
  }, [isMounted, push]);

  /**
   * Retrieve Data Action - get the user data from the localstorage & sets as
   * logged in (redirects to profile page)
   */
  const retrieveUserData = useCallback(async () => {
    setIsLoading(true);
    try {
      const loadedUser = localStorage.getItem(StorageKeys.USER_KEY);
      if (!loadedUser) {
        setIsLogged(false);
        return;
      }
      if (isMounted.current) {
        setUser(JSON.parse(loadedUser));
        setIsLogged(true);
      }
    } catch (e) {
      alert('Algo correu mal!');
    } finally {
      if (isMounted.current) setIsLoading(false);
      push('/');
    }
  }, [isMounted, push]);

  const memoizedValue = useMemo(
    () => ({
      user,
      isLogged,
      isLoading,
      signIn,
      signOut,
      retrieveUserData,
    }),
    [isLoading, isLogged, retrieveUserData, signIn, signOut, user],
  );

  return <AuthContext.Provider value={memoizedValue} {...props} />;
};
