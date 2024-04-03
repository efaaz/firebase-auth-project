import React, { useContext } from "react";
import { authProvider } from "../AuthProvider";
import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const { user, loading } = useContext(authProvider);
  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/SignIn"></Navigate>;
}

export default PrivateRoutes;
