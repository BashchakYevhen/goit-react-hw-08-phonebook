import { useSelector, useDispatch } from 'react-redux';
import { getName } from 'redux/selectors';
import { logOut } from 'redux/authorization/authOperation';
import avatarDefault from '../../image/avatarDefault.png';
import { TextName, UserBar } from './useMenu.style';
export const UserMenu = () => {
  const name = useSelector(getName);
  const avatar = avatarDefault;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
  };
  return (
    <UserBar>
      <img src={avatar} alt="avatar" width="32" />
      <TextName>{name}</TextName>
      <button type="button" onClick={handleClick}>
        Logout
      </button>
    </UserBar>
  );
};
