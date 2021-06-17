import React from 'react';

import { Button } from '../../components';
import { useAuthContext } from '../../hooks';
import styles from './profile.module.scss';

const UserProfile = () => {
  const { isLoading, user, signOut } = useAuthContext();

  if (!user) return <p>not found</p>;

  return (
    <main className="container">
      <div className="card">
        <div className={styles.infoContainer}>
          <div style={{ marginRight: '50px' }}>
            <h1>{user.name}</h1>
            <p>
              Email: <span>{user.email}</span>
            </p>
            <p>
              Sexo: <span>{user.gender}</span>
            </p>
            <p>
              Data de nascimento:
              <span>{new Date(user.birthday).toLocaleDateString()}</span>
            </p>
            <p>
              Estado: <span>{user.state}</span>
            </p>
          </div>

          <img
            width={150}
            height={150}
            alt="avatar do usuário"
            src={user.avatar}
          />
        </div>

        <p style={{ textAlign: 'center' }}>
          <Button isLoading={isLoading} onClick={signOut}>
            Sair
          </Button>
        </p>
      </div>
    </main>
  );
};

export default UserProfile;
