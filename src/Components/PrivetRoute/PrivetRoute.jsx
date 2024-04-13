import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContex } from "../FireBaseProvider/FireBaseProvider";

const PrivetRoute = ({ children }) => {
  const location = useLocation()
  const { user } = useContext(AuthContex);
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname} >


  </Navigate>;
};

export default PrivetRoute;
