import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const AuthProvider = createContext();

const AuthContextProvide = (props) => {
  const [user, setUser] = useState({
    user: null,
    token: null,
    isAuthenticated: null,
  });

  const validateToken = async () => {
    const token = await window.localStorage.getItem("token");
    // console.log(token);
    if (token) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      try {
        const { data } = await axios.get(
          "https://backend-hrmate.onrender.com/api/v1/validate",
          config
        );
        // console.log(data, "validate");
        setUser({
          user: data.data,
          token,
          isAuthenticated: true,
        });
      } catch (error) {
        setUser({
          user: null,
          token: null,
          isAuthenticated: false,
        });
        console.log(error);
      }
    }
  };
  // console.log(user, "user");

  useEffect(() => {
    validateToken();
  }, []);
  return (
    <AuthProvider.Provider
      value={{
        user,
        setUser,
      }}
    >
      {props.children}
    </AuthProvider.Provider>
  );
};
export default AuthContextProvide;
