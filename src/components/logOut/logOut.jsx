import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/authorization/operation';
import { Navigate } from 'react-router-dom';
import { getisLoggedIn } from 'redux/selectors';
export const LogOut = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getisLoggedIn);
  const handleClick = () => {
    dispatch(logOut());

    if (!isLoggedIn) {
      console.log(isLoggedIn);
      return <Navigate to="/" replace />;
    }
  };
  return (
    <button type="button" onClick={handleClick}>
      LogOut
    </button>
  );
};
