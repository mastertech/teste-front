import { api } from './api';

type LoginData = {
  email: string;
  password: string;
}

export const fetchUserData = async ({ email, password }: LoginData) => {
  const { data: user } = await api.post('/user/login', { email, password });

  return user;
}