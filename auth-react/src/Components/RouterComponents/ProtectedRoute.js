import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../Context/AuthContext";

// function ProtectedRoute(props) {
//     const { loggedInUser } = useContext(AuthContext)
//     const  Component = props.component
//     // delete props.component;
//     return (
//         <Route {...props} render={(routeProps) => {
//             console.log(loggedInUser)
//             if(loggedInUser.user.name) {
//                 return <Component {...routeProps} />
//             } else {
//                 return <Redirect to={{ pathname: "/login", state: { from: routeProps.location }}} />
//             }
//             }}
//         />
//     )
// }


function ProtectedRoute({ component: Component, ...rest }) {
    const { loggedInUser } = useContext(AuthContext)
    return (
        <Route {...rest} render={(routeProps) => {
            // console.log(loggedInUser.email)
            if(loggedInUser.email) {
                return <Component {...routeProps} />
            } else {
                return <Redirect to={{ pathname: "/profile", state: { from: routeProps.location }}} />
            }
            }}
        />
    )
}

export default ProtectedRoute