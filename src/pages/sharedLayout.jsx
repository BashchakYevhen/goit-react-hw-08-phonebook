import { LogOut } from 'components/logOut/logOut';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { getisLoggedIn } from 'redux/selectors';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(getisLoggedIn);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        {!isLoggedIn && <Link to="/LogIn">Login</Link>}
        {!isLoggedIn && <Link to="/SignUp">SignUp</Link>}
        {isLoggedIn && <Link to="/PhoneBook">PhoneBook</Link>}
        {isLoggedIn && <LogOut />}
        <Outlet />
      </nav>
    </header>
  );
};
