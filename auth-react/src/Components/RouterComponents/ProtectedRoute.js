import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../Context/AuthContext";

function ProtectedRoute({ component: Component, ...rest }) {
    const { loggedInUser } = useContext(AuthContext)
    return (
        <Route {...rest} render={(routeProps) => {

            if(loggedInUser.name) {
                return <Component {...routeProps} />
            } else {
                return <Redirect to={{ pathname: "/", state: { from: routeProps.location }}} />
            }
            }}
        />
    )
}

export default ProtectedRoute