import { FC } from 'react'
import { AuthProvider } from './context/AuthContext'
import { Router } from 'react-router-dom'
import { history } from './helpers/history'
import { Routes } from './routes'

export const App: FC = () => {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </AuthProvider>
  )
}
