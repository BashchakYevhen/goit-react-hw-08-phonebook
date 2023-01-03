import { Navigate, Routes, Route } from 'react-router-dom';
import { HeaderLogo } from '../pages/header/header';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { fetchCurrentUser } from 'redux/authorization/authOperation';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { getIsRefreshing } from 'redux/selectors';
import { Spinner } from '@chakra-ui/react';

const HomePage = lazy(() => import('../pages/home/home.jsx'));
const LoginPage = lazy(() => import('../pages/login/login.jsx'));
const SignUpPage = lazy(() => import('../pages/singUp/signUp.js'));
const PhoneBookPage = lazy(() =>
  import('../components/PhoneBookPage/PhoneBookPage')
);

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  // const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Spinner />
  ) : (
    <Routes>
      <Route path="/" element={<HeaderLogo />}>
        <Route index element={<HomePage />} />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/phoneBook" component={<LoginPage />} />
          }
          restricted
        />
        <Route
          path="/signUp"
          element={
            <PublicRoute redirectTo="/phoneBook" component={<SignUpPage />} />
          }
          restricted
        />
        <Route
          path="/phoneBook"
          element={
            <PrivateRoute redirectTo="/" component={<PhoneBookPage />} />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
