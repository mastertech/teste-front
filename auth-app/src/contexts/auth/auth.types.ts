import { IUser, LoginPayload } from '../../constants/types';

export interface AuthContextProps {
  user?: IUser;
  isLogged: boolean;
  isLoading: boolean;

  signIn: (payload: LoginPayload) => Promise<void>;
  signOut: () => Promise<void>;
  retrieveUserData(): void;
}
