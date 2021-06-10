import axios from 'axios';
const baseURL = 'http://jrwee.mocklab.io';
const api = axios.create({
  baseURL,
});
const getProfile = async (email, password) => {
  const validUser = {
    email: 'teste@front.com',
    password: 'teste123',
  };
  if (email === '' || password === '') {
    return 'Os campos email e senha não podem ser vazios!';
  }
  if (email !== validUser.email && password !== validUser.password) {
    return 'Email e/ou senha incorretos!';
  }
  try {
    const result = await api.post('/user/login', { email, password });
    return result.data;
  } catch (e) {
    return false;
  }
};
export default getProfile;
