import React from "react";
import { AuthProvider } from "./carts"; //dados pelo contexto

const AppProvider: React.FC<any> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;
