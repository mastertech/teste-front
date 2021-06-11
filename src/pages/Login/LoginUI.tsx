import '../../styles/pages/Login.css';

interface LoginProps {
  error: string;
  handleSubmit: (event: any) => void;
}

export const LoginUI: React.FC<LoginProps> = ({ error, handleSubmit }: any) => (
  <div className="container">
    <h1>Login</h1>

    <form onSubmit={handleSubmit}>
      <label>
        <span>E-mail</span>
        <input type="email" name="email" placeholder="ipsum@lorem.com" />
      </label>
      <label>
        <span>Senha</span>
        <input type="password" name="password" placeholder="*************" />
      </label>

      <span className="error">{ error }</span>

      <button>Login</button>
    </form>
  </div>
);