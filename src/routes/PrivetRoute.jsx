import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user?.email) {
    return <div>Loading...</div>;
  }
  return children;
};

export default PrivetRoute;
