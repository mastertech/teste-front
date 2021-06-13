import { AxiosResponse } from 'axios';

import { IUser, LoginPayload } from '../../../constants/types';

export type TPostMakeLogin = (
  payload: LoginPayload,
) => Promise<AxiosResponse<IUser>>;
