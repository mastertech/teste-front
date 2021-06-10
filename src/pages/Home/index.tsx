import { withAuth } from '../../HOC/Auth';
import { HomeUI } from './HomeUI';

const Home = () => <HomeUI />

export default withAuth(Home);