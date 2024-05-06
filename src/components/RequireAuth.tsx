import { useContext } from "react";
import { AuthContext } from "../store/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const RequireAuth = () => {
  const { authorized } = useContext(AuthContext);
  const location = useLocation();

  if (!authorized) {
    return <Navigate to="/login" state={{ pathname: location.pathname }} replace/>;
  }

  return <Outlet />;
};
