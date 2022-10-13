import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getisLoggedIn } from 'redux/selectors';

export const PublicRoute = ({
  component: Component,
  restricted,
  redirectTo = '/',
}) => {
  const isLoggedIn = useSelector(getisLoggedIn);
  const shouldRestrict = isLoggedIn && restricted;
  console.log(restricted);
  return shouldRestrict ? <Navigate to={redirectTo} /> : Component;
};
