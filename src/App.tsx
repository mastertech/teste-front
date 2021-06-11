import { Routes } from './navigation';
import { UserProvider } from './context/UserContext';

const App = () => (
  <UserProvider>
    <Routes />
  </UserProvider>  
)

export default App;
