import { FC, ReactNode } from "react";
import { useAuth } from "../../redux/auth/useAuth";
import { Navigate } from "react-router-dom";

export interface TypeRoute {
  redirectTo: string;
  children: ReactNode;
}

export const PublicRoute: FC<TypeRoute> = ({ children, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? children : <Navigate to={redirectTo} />;
};
