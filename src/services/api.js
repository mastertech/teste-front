import axios from 'axios';
const baseURL = 'http://jrwee.mocklab.io';
const api = axios.create({
  baseURL,
});
const getProfile = async (email, password) => {
  const result = await api.post('/user/login', { email, password });
  return result.data;
};
export default getProfile;
