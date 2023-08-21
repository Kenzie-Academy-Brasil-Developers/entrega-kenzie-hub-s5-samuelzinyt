import { useContext } from "react";
import { Context } from "../providers/context";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
  const { userData } = useContext(Context);

  return userData ? <Outlet /> : <Navigate to="/" />;
};
