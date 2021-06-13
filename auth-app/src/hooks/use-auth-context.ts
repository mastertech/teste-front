import { useContext } from 'react';

import { AuthContext } from '../contexts/auth';
import { AuthContextProps } from '../contexts/auth/auth.types';

const useAuthContext = () => useContext(AuthContext) as AuthContextProps;

export default useAuthContext;
