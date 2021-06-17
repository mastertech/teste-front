/* eslint-disable @typescript-eslint/no-explicit-any */
import { act, renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { toast } from 'react-toastify';

import { Routes, StorageKeys } from '../../constants';
import { IUser } from '../../constants/types';
import { AuthContextProvider } from '../../contexts/auth';
import { makeLogin } from '../../services';
import useAuthContext from '../use-auth-context';

const mockPush = jest.fn();
const mockUser: IUser = {
  id: 5,
  name: 'edson',
  password: '1234',
  avatar: 'dummy-avatar',
  birthday: 'dummy-bithday',
  email: 'dummy@email',
  gender: 'male',
  state: 'sp',
};

jest.mock('../../services', () => ({
  makeLogin: jest.fn(),
}));
jest.mock('axios');
jest.mock('react-toastify', () => ({
  toast: { error: jest.fn(), success: jest.fn() },
}));
jest.mock('../index', () => ({
  useIsMounted: () => ({ current: true }),
}));
jest.mock('react-router-dom', () => ({
  useHistory: () => ({ push: mockPush }),
}));

const mockSetItem = jest.spyOn(Storage.prototype, 'setItem');
const mockGetItem = jest.spyOn(Storage.prototype, 'getItem');
const mockRemoveItem = jest.spyOn(Storage.prototype, 'removeItem');

const makeSut = () => {
  return renderHook(() => useAuthContext(), {
    wrapper: ({ children }) => (
      <AuthContextProvider>{children}</AuthContextProvider>
    ),
  });
};

describe(useAuthContext.name, () => {
  afterEach(jest.clearAllMocks);

  it('returns the correct default values', () => {
    const { result } = makeSut();

    expect(result.current).toEqual({
      user: undefined,
      isLogged: false,
      isLoading: false,
      signIn: expect.any(Function),
      signOut: expect.any(Function),
      retrieveUserData: expect.any(Function),
    });
  });

  it('calls the makeLogin with the right values on signIn', async () => {
    const data = { data: mockUser };
    (makeLogin as jest.Mock).mockResolvedValue(data);

    const { result, waitFor } = makeSut();

    await act(async () => {
      await result.current.signIn({ email: 'dummy@email', password: '1234' });
    });

    await waitFor(() => expect(makeLogin).toHaveBeenCalledTimes(1));
    expect(makeLogin).toHaveBeenCalledWith({
      email: 'dummy@email',
      password: '1234',
    });
    expect(result.current.isLogged).toBe(true);
    expect(result.current.user).toEqual(mockUser);
    expect(mockPush).toHaveBeenCalledWith(Routes.Profile);
    expect(toast.success).toHaveBeenCalledWith('Bem-vindo de volta!');
    expect(toast.error).not.toHaveBeenCalled();
    expect(mockSetItem).toHaveBeenCalledWith(
      StorageKeys.USER_KEY,
      JSON.stringify(mockUser),
    );
  });

  it('should makeLogin throw a 404 error', async () => {
    (makeLogin as jest.Mock).mockRejectedValue(new Error('error 404'));
    const { result, waitFor } = makeSut();
    await act(async () => {
      await result.current.signIn({ email: 'dummy@email', password: '1234' });
    });

    await waitFor(() => expect(makeLogin).toHaveBeenCalledTimes(1));
    expect(makeLogin).toHaveBeenCalledWith({
      email: 'dummy@email',
      password: '1234',
    });
    expect(result.current.isLogged).toBe(false);
    expect(result.current.user).toBeUndefined();
    expect(mockPush).not.toHaveBeenCalled();
    expect(toast.success).not.toHaveBeenCalled();
    expect(toast.error).toHaveBeenCalledWith('Email ou senha incorretos!');
    expect(mockSetItem).not.toHaveBeenCalled();
  });

  it('should makeLogin throw a any error', async () => {
    (makeLogin as jest.Mock).mockRejectedValue(new Error('error'));
    const { result, waitFor } = makeSut();

    await act(async () => {
      await result.current.signIn({ email: 'dummy@email', password: '1234' });
    });

    await waitFor(() => expect(makeLogin).toHaveBeenCalledTimes(1));
    expect(makeLogin).toHaveBeenCalledWith({
      email: 'dummy@email',
      password: '1234',
    });
    expect(result.current.isLogged).toBe(false);
    expect(result.current.user).toBeUndefined();
    expect(mockPush).not.toHaveBeenCalled();
    expect(toast.success).not.toHaveBeenCalled();
    expect(toast.error).toHaveBeenCalledWith('Algo correu mal!');
    expect(mockSetItem).not.toHaveBeenCalled();
  });

  it('should performs signOut action', async () => {
    const { result, waitFor } = makeSut();
    await act(async () => {
      await result.current.signOut();
    });

    await waitFor(() =>
      expect(mockRemoveItem).toHaveBeenCalledWith(StorageKeys.USER_KEY),
    );

    expect(result.current.isLogged).toBe(false);
    expect(result.current.user).toBeUndefined();
    expect(mockPush).toHaveBeenCalledWith(Routes.Login);
  });

  it('should performs retrieveUserData for found user in storage', async () => {
    mockSetItem.mockResolvedValue(mockUser as never);

    const { result } = makeSut();

    act(() => {
      result.current.retrieveUserData();
    });

    expect(mockGetItem).toHaveBeenCalledWith(StorageKeys.USER_KEY);
    expect(mockPush).toHaveBeenCalledWith('/');
  });

  it('should performs retrieveUserData for not found user in storage', async () => {
    mockSetItem.mockReturnValue(mockUser as never);

    const { result } = makeSut();

    act(() => {
      result.current.retrieveUserData();
    });

    expect(mockGetItem).toHaveBeenCalledWith(StorageKeys.USER_KEY);
    expect(result.current.isLogged).toBe(false);
    expect(result.current.user).toEqual(undefined);
    expect(mockPush).toHaveBeenCalledWith('/');
  });
});
