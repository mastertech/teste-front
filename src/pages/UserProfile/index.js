import React from 'react';
import Button from '../../components/Button';
import { useAuth } from '../../providers/auth';
import styles from './styles.module.scss';

export default function UserProfile() {
  const { userData, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <>
      <div className={styles.container}>
        <ul>
          <li>
            <h1>{userData.name}</h1>
          </li>
          <li>{userData.email}</li>
          <li>{userData.state}</li>
        </ul>

        <img src={userData.avatar} width="136px" height="112px" alt="Avatar" />

        <div className={styles.button}>
          <Button title="Log out" onClick={handleSignOut} />
        </div>
      </div>
    </>
  );
}
