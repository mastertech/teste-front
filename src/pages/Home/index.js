import React from 'react';
import { useAuth } from '../../contexts/auth';


import { Container, UserCard, UserInfos } from './styles';

export default function Home() {
    const { Logout } = useAuth();
    const { user } = useAuth();

    async function handleLogout() {
        Logout();
    }



    return(
        <Container>
            
                <UserCard >
                    <UserInfos>
                        <h1>{user.name}</h1>
                        <p>Email: {user.email}</p>
                        <p>Estado: {user.state}</p>
                    </UserInfos>
                    <img src={user.avatar} alt="avatar"/>
                </UserCard>
            
            <button onClick={handleLogout}>
                Log out
            </button>
        </Container>
    );
}