import React from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router';
import Button from '../../components/Button';
import { useUser } from '../../contexts/UserContext';
import './styles.scss';

function Dashboard() {
  const { user, signOut } = useUser();

  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  }, [history, user]);

  function handleSignOut() {
    signOut();
    history.push('/');
  }

  return (
    <div className='dashboard-container'>
      <Helmet>
        <title>Test | Dashboard</title>
      </Helmet>

      <main className='dashboard-content'>
        <div className='dashboard-user-data'>
          <div>
            <h1>{user?.name}</h1>
            <p>Email: {user?.email}</p>
            <p>Estado: {user?.state}</p>
          </div>

          <img src={user?.avatar} alt="avatar" />
        </div>

        <Button onClick={handleSignOut}>Log out</Button>
      </main>
    </div>
  );
}

export default Dashboard;