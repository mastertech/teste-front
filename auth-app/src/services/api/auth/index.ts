import { APIEndpoints } from '../../../constants';
import APIConnector from '../conector';
import { TPostMakeLogin } from './auth.types';

export const makeLogin: TPostMakeLogin = ({ email, password }) =>
  APIConnector.post(APIEndpoints.Login, { email, password });
