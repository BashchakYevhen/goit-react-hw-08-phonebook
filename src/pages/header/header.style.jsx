import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AddressBook } from '@styled-icons/icomoon/AddressBook';

export const Header = styled.div`
  margin: 4px 4px;
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: #181818;
`;
export const TextLogo = styled(NavLink)`
  width: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 24px;
  color: ${p => p.theme.colors.white};
  &:hover {
    color: ${p => p.theme.colors.muted};
  }
`;
export const LogoIcon = styled(AddressBook)`
  width: 35px;
  margin-right: 15px;
`;
