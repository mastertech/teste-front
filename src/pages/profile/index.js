import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Profile = ({ location }) => {
  const { name, email, state, avatar } = location.state.data;
  return (
    <section className="user-card">
      <div className="user-info">
        <h2>{name}</h2>
        <span>{email}</span>
        <span>{state}</span>
      </div>
      <div className="user-avatar">
        <img src={avatar} alt="Profile Avatar" />
      </div>
      <Link to="/">
        <button type="button">Sair</button>
      </Link>
    </section>
  );
};

export default Profile;
