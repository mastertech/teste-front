export const verifyAuth = () => {
  const stringifiedData = localStorage.getItem('user');
  const user = stringifiedData ? JSON.parse(stringifiedData) : null;

  return !!user;
};