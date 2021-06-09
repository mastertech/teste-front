import axios from 'axios';
const baseURL = 'http://jrwee.mocklab.io';
const api = axios.create({
  baseURL,
});
const getProfile = async (email, password) => {
  if (email === '' || password === '') {
    return false;
  }
  try {
    const result = await api.post('/user/login', { email, password });
    return result.data;
  } catch (e) {
    return false;
  }
};
export default getProfile;
