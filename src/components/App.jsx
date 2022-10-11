import { Route, Routes, Navigate } from 'react-router-dom';
import { SharedLayout } from '../pages/sharedLayout';
import { Home } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { SignUp } from 'pages/singUp/singUp';
import { PhoneBook } from 'pages/phoneBook/phoneBook';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/phoneBook" element={<PhoneBook />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
