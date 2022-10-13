import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getisLoggedIn } from 'redux/selectors';

export const PublicRoute = ({
  component: Component,

  redirectTo = '/',
}) => {
  const isLoggedIn = useSelector(getisLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
