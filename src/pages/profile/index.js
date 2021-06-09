import React from 'react';
import './style.css';

const Profile = () => {
  return (
    <section className="user-card">
      <div className="user-info">
        <h2>Nome do Usuário</h2>
        <span>Email</span>
        <span>Estado</span>
      </div>
      <div className="user-avatar">
        <img src="" alt="Profile Avatar" />
      </div>
      <button type="button">Sair</button>
    </section>
  );
};

export default Profile;
