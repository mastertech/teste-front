import { IUser } from '../../@types/IUser'
import { Layout } from '../../components/Layout';
import '../../styles/pages/Home.css';

type HomeProps = {
  user: IUser;
  logout: () => void;
}

export const HomeUI: React.FC<HomeProps> = ({ user, logout }) => (
  <Layout buttonTitle="Log out" buttonAction={logout}>
    <div className="home_container">
      <div className="user_info_container">
        <h1>{ user.name }</h1>

        <p>{ user.email }</p>
        <p>{ user.birthday }</p>
        <p>{ user.state }</p>
        <p>{ user.gender }</p>
      </div>

      <img src={user.avatar} />
    </div>
  </Layout>
);