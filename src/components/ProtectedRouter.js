import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext'


const ProtectedRouter = ({ children: Component, ...rest }) => {

  const auth = useAuth();

  return (
    <Route {...rest} children={(props) => {
      if (auth.isLogin()) {
        return <Component {...props} />
      }
      else {
        return <Redirect to={
          {
            pathname: "./Login",
            state: { from: props.location }
          }
        } />
      }
    }} />
  )
}

export default ProtectedRouter;