import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  if (!false) return <Navigate to={"/"} replace />;

  return children;
};

export default ProtectedRoute;
