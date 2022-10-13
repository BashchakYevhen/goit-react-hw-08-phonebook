import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getisLoggedIn } from 'redux/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getisLoggedIn);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
