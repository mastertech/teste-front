import { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { withAuth } from '../../HOC/Auth';
import { HomeUI } from './HomeUI';

const Home = ({ history }: RouteComponentProps) => {
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout(() => {
      history.replace('/login')
    });
  }

  if (!user) return <h1>Usuário não encontrado</h1>

  return <HomeUI user={user} logout={handleLogout} />
}

export default withAuth(Home);