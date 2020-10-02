import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route 
      { ...rest }
      render={(props) =>  
        sessionStorage.token && props.location.state !== undefined ? (
          <Component { ...props } />
        ) : (
          <Redirect to="/admin" />
        )
      }
    />
  );
};
export default ProtectedRoute;
