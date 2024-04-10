import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContex } from "../FireBaseProvider/FireBaseProvider";

const PrivetRoute = ({ children }) => {
  const { user } = useContext(AuthContex);
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivetRoute;
