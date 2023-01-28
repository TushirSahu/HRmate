import axios from "axios";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthProvider);

  if (user.isAuthenticated === true) return children;
  else if (user.isAuthenticated === false) <Navigate to='/login' />;
  else return <h1>Loading...</h1>;
};

export default ProtectedRoute;
