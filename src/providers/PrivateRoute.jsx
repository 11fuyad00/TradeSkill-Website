import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';
import { use } from 'react';
import Loading from '../pages/Loading';

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return <Loading></Loading>;
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
