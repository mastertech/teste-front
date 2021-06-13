import React from 'react';

import { useAuthContext } from '../../hooks';

const UserProfile = () => {
  const { user } = useAuthContext();
  return (
    <div>
      <p>{user}</p>
    </div>
  );
};

export default UserProfile;
