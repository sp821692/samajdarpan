import React from "react";
import { Navigate } from "react-router-dom";

const LoginChecker = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn"); // Example logic for checking login status
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default LoginChecker;
