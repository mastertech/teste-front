import { FC, useContext } from 'react'
import { RouteComponentProps } from 'react-router'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Title } from '../../components/Title'
import { AuthContext } from '../../context/AuthContext'
import './styles.scss'

type UserProps = {
  birthday: string
  email: string
  gender: string
  id: number
  name: string
  state: string
  avatar: string
}

type DashboardProps = RouteComponentProps<{}, any, { user: UserProps }>

export const Dashboard: FC<DashboardProps> = ({ location }) => {
  const { handleLogout } = useContext(AuthContext)
  const user = location.state?.user

  return (
    <Card>
      {!user && (
        <h1 className="card-title">Sua sessão expirou, logue novamente!</h1>
      )}
      <div className="card-content">
        <div className="user-info">
          <Title>{user?.name}</Title>
          <p className="user-info-text">Email: {user?.email}</p>
          <p className="user-info-text">Estado: {user?.state}</p>
        </div>
        <div className="user-avatar">
          <img
            src={
              user?.avatar ||
              'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png'
            }
            alt="User avatar"
            loading="lazy"
          />
        </div>
      </div>
      <Button title="Log out" isLoading={false} onClick={handleLogout} />
    </Card>
  )
}
