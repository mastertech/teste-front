import { FC } from 'react'
import { Router } from 'react-router-dom'
import { history } from './helpers/history'
import { Routes } from './routes'
import { AuthProvider } from './context/AuthContext'
import { SnackBarProvider } from './context/SnackBarContext'

export const App: FC = () => {
  return (
    <AuthProvider>
      <SnackBarProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </SnackBarProvider>
    </AuthProvider>
  )
}
