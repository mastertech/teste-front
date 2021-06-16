import React from 'react';

import { Button } from '../../components';
import { useAuthContext } from '../../hooks';

const UserProfile = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <p>{user}</p>
      <Button>Sair</Button>
    </div>
  );
};

export default UserProfile;
