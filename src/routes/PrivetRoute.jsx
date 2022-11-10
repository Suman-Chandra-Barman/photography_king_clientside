import React, { useContext } from "react";
import { Vortex } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="absolute top-[50%] left-[50%]">
        <Vortex visible={true} height="100" width="100" />
      </div>
    );
  }
  if (!user?.email) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivetRoute;
