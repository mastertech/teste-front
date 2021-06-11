import { createContext, FC } from 'react'
import { useAuth } from '../hooks/useAuth'

type FormDataProps = {
  email: string
  password: string
}

type AuthContextProps = {
  isAuth: boolean
  isLoading: boolean
  handleLogin: (formData: FormDataProps) => Promise<boolean | void>
  handleLogout: () => void
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider: FC = ({ children }) => {
  const { isAuth, isLoading, handleLogin, handleLogout } = useAuth()

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        isLoading,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
