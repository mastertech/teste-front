import '../../styles/pages/Login.css';

export const LoginUI = () => (
  <div className="container">
    <h1>Login</h1>

    <form>
      <label>
        <span>E-mail</span>
        <input type="email" placeholder="ipsum@lorem.com" />
      </label>
      <label>
        <span>Senha</span>
        <input type="email" placeholder="*************" />
      </label>

      <button>Login</button>
    </form>
  </div>
);