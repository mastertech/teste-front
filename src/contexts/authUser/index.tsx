import { FC, useState, createContext } from 'react';
import { ContextDefaultValuesProps } from './types';

const contexDefaultValues: ContextDefaultValuesProps = {
    authUser: {},
    setAuthUser: () => {},
};

export const AuthUserContext =
    createContext<ContextDefaultValuesProps>(contexDefaultValues);

const AuthUserProvider: FC = ({ children }) => {
    const [authUser, setAU] = useState<object>(contexDefaultValues.authUser);

    const setAuthUser = (newAuthUser: object) => setAU(newAuthUser);

    return (
        <AuthUserContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthUserContext.Provider>
    );
};

export default AuthUserProvider;
