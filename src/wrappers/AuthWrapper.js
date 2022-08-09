import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const location = useLocation();

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to={"/user-onboard"} replace state={{ from: location }} />;
};

export default AuthWrapper;
