/* eslint-disable react/jsx-indent-props */
import { FC, useState, useContext } from 'react';
import DataUser from './utils';
import history from '../../services/history';
import { AuthUserContext } from '../../contexts';

import {
    Container,
    Section,
    Header,
    Form,
    InputContainer,
    ButtonContainer,
} from './styles';

const Dashboard: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setAuthUser } = useContext(AuthUserContext);

    async function handleLogin() {
        const val = await DataUser({ email, password });

        if (val) {
            const { data } = val;

            setAuthUser(data);
            localStorage.setItem('info', JSON.stringify(data));
            history.push('/painel');
        }
    }

    return (
        <Container>
            <Section>
                <Header>
                    <h1>Login</h1>
                </Header>

                <Form>
                    <InputContainer>
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </InputContainer>

                    <InputContainer>
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            name="senha"
                            id="senha"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </InputContainer>

                    <ButtonContainer>
                        <button type="button" onClick={() => handleLogin()}>
                            Login
                        </button>
                    </ButtonContainer>
                </Form>
            </Section>
        </Container>
    );
};

export default Dashboard;
