import { IUser } from '../../@types/IUser'
import { Layout } from '../../components/Layout';
import { FaEnvelope, FaCalendar, FaMapPin, FaVenusMars } from 'react-icons/fa';
import '../../styles/pages/Home.css';
import { TextIcon } from '../../components/Home/TextIcon';

type HomeProps = {
  user: IUser;
  logout: () => void;
}

export const HomeUI: React.FC<HomeProps> = ({ user, logout }) => (
  <Layout buttonTitle="Log out" buttonAction={logout}>
    <div className="home_container">
      <div className="user_info_container">
        <h1>{ user.name }</h1>

        <TextIcon Icon={FaEnvelope} text={user.email} />
        <TextIcon Icon={FaCalendar} text={user.birthday} />
        <TextIcon Icon={FaMapPin} text={user.state} />
        <TextIcon Icon={FaVenusMars} text={user.gender} />
      </div>

      <img src={user.avatar} />
    </div>
  </Layout>
);