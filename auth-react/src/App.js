import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from './Components/RouterComponents/Login';
import Profile from './Components/RouterComponents/Profile';
import ProtectedRoute from "./Components/RouterComponents/ProtectedRoute";
import './assets/style.css';

import { AuthContextComponent } from "./Components/Context/AuthContext";

function App() {
  return (
   <BrowserRouter>
    <AuthContextComponent>
      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/profile" component={Profile} />
      </Switch>
    </AuthContextComponent>
   </BrowserRouter>
  );
}

export default App;
