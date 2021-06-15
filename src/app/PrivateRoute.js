import React, { useContext } from 'react'
import { Route,Redirect } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';

export default function PrivateRoute({ isAuth:isAuth, component: Component, ...rest }) {

  const { authenticated } = useContext(AuthContext)
    return (
      <Route {...rest}
        render={(props) => {

          if(authenticated) {
            return <Component {...props} />
          } else {
            return <Redirect to={{pathname: "/",state: { from: props.location }}}/>
          }
        }}
      />
    );
  }