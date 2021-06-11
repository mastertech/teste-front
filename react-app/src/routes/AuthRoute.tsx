import { FC, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Redirect, Route, RouteProps } from 'react-router-dom'

export const AuthRoute: FC<RouteProps> = (props) => {
  const { isAuth } = useContext(AuthContext)

  if (!isAuth) {
    localStorage.clear()
    return <Redirect to="/login" />
  }

  return <Route {...props} />
}
