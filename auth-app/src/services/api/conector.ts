import axios from 'axios';

import { EnvKeys } from '../../constants';

const APIConnector = axios.create({
  baseURL: process.env[EnvKeys.API_URL],
});

export default APIConnector;
