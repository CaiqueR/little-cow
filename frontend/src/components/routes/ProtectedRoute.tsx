import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useGeneral } from "../context/Provider";

// @ts-ignore
interface ProtectedRoutes extends RouteProps {
  component: React.ElementType;
}

const ProtectedRoute: React.FC<ProtectedRoutes> = ({
  component: Component,
  ...rest
}) => {
  const { user } = useGeneral();
  console.log(user);

  return (
    <Route
      {...rest}
      render={(props) =>
        user.isLogged ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default ProtectedRoute;
