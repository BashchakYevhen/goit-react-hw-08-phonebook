import { useSelector, useDispatch } from 'react-redux';

import { getName } from 'redux/selectors';
import { logOut } from 'redux/authorization/authOperation';

import {
  TextName,
  Box,
  Button,
  PowerOffIcon,
  UserIcon,
  UserBar,
} from './useMenu.style';

export const UserMenu = props => {
  const name = useSelector(getName);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(logOut());
    console.log(props.theme);
  };
  return (
    <Box>
      <UserBar>
        <UserIcon />
        <TextName>{name}</TextName>
      </UserBar>
      <Button colorScheme="#342e66" type="button" onClick={handleClick}>
        <PowerOffIcon value={{ className: 'global-class-name' }} />
      </Button>
    </Box>
  );
};
