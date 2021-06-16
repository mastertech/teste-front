import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';
import GlobalStyle from './styles/global';

import AuthUserProvider from './contexts/authUser/index';

function App() {
    return (
        <AuthUserProvider>
            <Router history={history}>
                <Routes />
                <GlobalStyle />
            </Router>
        </AuthUserProvider>
    );
}

export default App;
