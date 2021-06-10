import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import './styles/global-theme.css'

function App() {
  return (
    <>
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
