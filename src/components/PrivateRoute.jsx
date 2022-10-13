import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getisLoggedIn, getIsRefreshing } from 'redux/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getisLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const should = !isLoggedIn && !isRefreshing;
  return should ? <Navigate to={redirectTo} /> : Component;
};
