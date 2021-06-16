/* eslint-disable react/jsx-indent-props */
import { FC, useState, useEffect, useContext } from 'react';
import history from '../../services/history';
import { AuthUserContext } from '../../contexts';
import { isEmpty } from './utils';

import { Section, UserInfo, LeftUserInfo, RightUserInfor } from './styles';
import { Container, ButtonContainer } from '../signin/styles';

interface IUserInfo {
    name: string;
    email: string;
    state: string;
    avatar: string;
}

const Dashboard: FC = () => {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userState, setUserState] = useState('');
    const [userImg, setUserImg] = useState('');
    const { authUser } = useContext(AuthUserContext);

    function setValues(data: IUserInfo) {
        const { name, email, state, avatar } = data;

        setUserName(name);
        setUserEmail(email);
        setUserState(state);
        setUserImg(avatar);
    }

    function handleUserData() {
        if (!isEmpty(authUser)) {
            setValues(authUser);
            return;
        }

        const data = JSON.parse(localStorage.getItem('info') || '');

        if (!isEmpty(data)) {
            setValues(data);
            return;
        }

        history.push('/');
    }

    useEffect(() => {
        handleUserData();
    }, []);

    return (
        <>
            <Container>
                <Section>
                    <UserInfo>
                        <LeftUserInfo>
                            <h1>{userName}</h1>
                            <span>{userEmail}</span>
                            <span> {userState}</span>
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
