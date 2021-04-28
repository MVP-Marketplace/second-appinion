import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = sessionStorage.getItem("user");

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !user ? <Redirect to="/login" /> : <Component {...routeProps} />
      }
    />
  );
};

export default PrivateRoute;

/*
return (
    <Route
      {...rest}
      render={(props) => {
        if (user) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
      }}
    />
  );
*/
