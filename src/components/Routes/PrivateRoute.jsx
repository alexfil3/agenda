import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ isLogin, Component }) {
  // const location = useLocation();
  // console.log(location, isLogin);
  return isLogin ? <Component /> : <Navigate to="/signin" />;
}

export default PrivateRoute;
