import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import Routes from './routes';
import './styles/global-theme.css';

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <Routes />
        </UserProvider>
      </Router>
    </>
  );
}

export default App;
