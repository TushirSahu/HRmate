import axios from "axios";
import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthProvider);
  console.log(user.isAuthenticated);

  if (user.isAuthenticated === true){
    return <>{children}</>
  } 
  if (user.isAuthenticated === false) {
    return <Navigate to='/login' />
  }
  if(user.isAuthenticated === null){
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500'></div>
      </div>
    )
  }
};

export default ProtectedRoute;
