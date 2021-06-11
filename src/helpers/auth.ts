import { getItemFromLocalStorage } from './localStorage';

export const verifyAuth = () => {
  const user = getItemFromLocalStorage('user', null);

  return !!user;
}