// import { Box } from '@chakra-ui/react';
import { UserMenu } from 'components/userMenu/userMenu';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

import { Outlet } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/selectors';

import { Header, TextLogo, LogoIcon } from './header.style';

export const HeaderLogo = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <Header>
        <TextLogo to={!isLoggedIn ? '/' : '/phoneBook'}>
          <LogoIcon />
          PhoneBook
        </TextLogo>

        {isLoggedIn && <UserMenu />}
      </Header>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
