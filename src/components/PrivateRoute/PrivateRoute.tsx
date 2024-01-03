import { FC } from "react";
import { TypeRoute } from "../PublicRoute/PublicRoute";
import { useAuth } from "../../redux/auth/useAuth";
import { Navigate } from "react-router-dom";

export const PrivateRoute: FC<TypeRoute> = ({
  children,
  redirectTo = "/register",
}) => {
  const { isLoggedIn, location } = useAuth();
  return isLoggedIn ? children : <Navigate to={redirectTo} state={location} />;
};
