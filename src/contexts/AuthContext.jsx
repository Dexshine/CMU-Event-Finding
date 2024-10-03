import { jwtDecode } from "jwt-decode";
import axiosInstance from "../api/axiosInstance";
import { createContext, useState, useEffect } from "react";

import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { useLocalStorageState } from "@toolpad/core";
import { set } from "react-hook-form";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useLocalStorageState(
    "accessToken",
    null
  );

  const verifyToken = (serviceToken) => {
    if (!serviceToken) {
      return false;
    }
    const decoded = jwtDecode(serviceToken);

    return decoded.exp > Date.now() / 1000;
  };

  const setSession = (serviceToken) => {
    if (serviceToken) {
      sessionStorage.setItem("serviceToken", serviceToken);
      // setAccessToken(serviceToken);

      axiosInstance.defaults.headers.common.Authorization = `Bearer ${serviceToken}`;
    } else {
      sessionStorage.removeItem("serviceToken");
      setAccessToken(null);
      delete axiosInstance.defaults.headers.common.Authorization;
    }
  };

  useEffect(() => {
    const serviceToken = accessToken;
    // const serviceToken = sessionStorage.getItem("serviceToken");

    if (serviceToken && verifyToken(serviceToken)) {
      setIsLoggedIn(true);
    }
  }, []);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axiosInstance.post(`/auth/google`, {
          token: tokenResponse.access_token,
        });

        setSession(res.data.accessToken);
        setAccessToken(res.data.accessToken);
        setIsLoggedIn(true);
        setUser(res.data.googleData);

        // return res.data;
      } catch (error) {
        console.error("Google login error:", error);
        alert("Server error. Please try again later.");
      }
    },
    onError: (error) => {
      console.error("Login Failed:", error);
      alert("Google login was unsuccessful. Please try again.");
    },
  });

  const login = () => {
    googleLogin();
  };

  const logout = () => {
    googleLogout();
    setSession(null);
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
