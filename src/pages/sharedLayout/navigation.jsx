import { UserMenu } from 'components/userMenu/userMenu';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { getisLoggedIn } from 'redux/selectors';
import { Header, UserNav } from './navigation.style';

export const Navigation = () => {
  const isLoggedIn = useSelector(getisLoggedIn);

  return (
    <>
      <div>
        <Header>
          <Link to="/">Home</Link>
          {isLoggedIn ? (
            <UserNav>
              <Link to="/PhoneBook">PhoneBook</Link>
              <UserMenu />
            </UserNav>
          ) : (
            <>
              <Link to="/LogIn">Login</Link>
              <Link to="/SignUp">SignUp</Link>
            </>
          )}
        </Header>
        <Outlet />
      </div>
    </>
  );
};
