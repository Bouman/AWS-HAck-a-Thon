import React, { useState, useEffect, useMemo } from "react";
import { message } from "antd";
import PropTypes from "prop-types";
import { AuthContext } from "./AuthContext";
import { getToken } from "../hooks/helpers";

function AuthProvider({ children }) {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const authToken = getToken();
  const fetchLoggedInUser = async (token) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${import.meta.API}/users/me`, {
        headers: { Authorization: `${import.meta.BEARER} ${token}` },
      });
      const data = await response.json();

      setUserData(data);
    } catch (error) {
      console.error(error);
      message.error("Error While Getting Logged In User Details");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (authToken) {
      fetchLoggedInUser(authToken);
    }
  }, [authToken]);

  const handleUser = (user) => {
    setUserData(user);
  };

  const AuthContextProviderValue = useMemo(
    () => ({
      user: userData,
      setUser: handleUser,
      isLoading,
    }),
    [userData]
  );

  return (
    <AuthContext.Provider value={AuthContextProviderValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
