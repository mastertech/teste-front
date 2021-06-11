import '../../styles/pages/Login.css';
import { Layout } from '../../components/Layout';

type LoginData = {
  email: string;
  password: string
}

interface LoginProps {
  error: string;
  data: LoginData
  handleLogin: () => void;
  handleInput: (event: any) => void;
}

export const LoginUI: React.FC<LoginProps> = ({ error, data, handleLogin, handleInput }) => (
  <Layout buttonTitle="Login" buttonAction={handleLogin}>
    <h1>Login</h1>

    <form>
      <label>
        <span>E-mail</span>
        <input
          type="email"
          name="email"
          placeholder="ipsum@lorem.com"
          value={data.email}
          onChange={handleInput}
        />
      </label>
      <label>
        <span>Senha</span>
        <input
          type="password"
          name="password"
          placeholder="*************"
          value={data.password}
          onChange={handleInput}
        />
      </label>

      <span className="error">{ error }</span>
    </form>
  </Layout>
);