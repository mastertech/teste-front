/* eslint-disable react/jsx-indent-props */
import { FC, useState, useEffect, useContext } from 'react';
import history from '../../services/history';
import { AuthUserContext } from '../../contexts';

import { Section, UserInfo, LeftUserInfo, RightUserInfor } from './styles';
import { Container, ButtonContainer } from '../signin/styles';

const Dashboard: FC = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userStatus, setUserStatus] = useState('');
    const [userImg, setUserImg] = useState('');
    const { authUser } = useContext(AuthUserContext);

    useEffect(() => {}, []);

    return (
        <>
            <Container>
                <Section>
                    <UserInfo>
                        <LeftUserInfo>
                            <h1>{userName}</h1>
                            <span>{userEmail}</span>
                            <span> {userStatus}</span>
                        </LeftUserInfo>

                        <RightUserInfor>
                            <img src={userImg} alt="UserIMG" />
                        </RightUserInfor>
                    </UserInfo>

                    <ButtonContainer>
                        <button type="button">Log out</button>
                    </ButtonContainer>
                </Section>
            </Container>
        </>
    );
};

export default Dashboard;
