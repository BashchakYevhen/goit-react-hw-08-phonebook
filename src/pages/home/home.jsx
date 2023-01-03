import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/selectors';
import { AuthPage, AuthForm } from './home.style';

export default function Home() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      {!isLoggedIn ? (
        <AuthPage>
          <AuthForm to="/login">Login</AuthForm>
          <AuthForm to="/SignUp">SignUp</AuthForm>
        </AuthPage>
      ) : (
        <AuthForm to="/PhoneBook">Open my phonebook</AuthForm>
      )}
    </>
  );
}
