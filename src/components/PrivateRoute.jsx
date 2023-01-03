import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLoggedIn, getIsRefreshing } from 'redux/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  console.log('isLoggedIn:', isLoggedIn, 'isRefreshing:', isRefreshing);
  const should = isLoggedIn && !isRefreshing;

  return should ? Component : <Navigate to={redirectTo} />;
};
