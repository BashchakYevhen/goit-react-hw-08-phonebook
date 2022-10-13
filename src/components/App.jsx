import { Navigate, Routes, Route } from 'react-router-dom';
import { Navigation } from '../pages/sharedLayout/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy } from 'react';
import { fetchCurrentUser } from 'redux/authorization/authOperation';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { getIsRefreshing } from 'redux/selectors';

const HomePage = lazy(() => import('../pages/home/home'));
const LoginPage = lazy(() => import('../pages/login/login'));
const SignUpPage = lazy(() => import('../pages/singUp/singUp'));
const PhoneBookPage = lazy(() => import('../pages/phoneBook/phoneBook'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Reloading page ...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage />} />
        <Route
          path="/login"
          element={
            <PublicRoute redirectTo="/phoneBook" component={<LoginPage />} />
          }
        />
        <Route
          path="/signUp"
          element={
            <PublicRoute redirectTo="/phoneBook" component={<SignUpPage />} />
          }
        />
        <Route
          path="/phoneBook"
          element={
            <PrivateRoute redirectTo="/login" component={<PhoneBookPage />} />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
