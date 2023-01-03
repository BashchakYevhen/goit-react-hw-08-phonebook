import styled from 'styled-components';
import { PowerOff } from '@styled-icons/fa-solid/PowerOff';
import { User } from '@styled-icons/feather/User';
export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UserBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.white};
  &:hover {
    cursor: pointer;
    color: ${p => p.theme.colors.muted};
  }
`;

export const UserIcon = styled(User)`
  width: 27px;
`;
export const TextName = styled.p`
  margin-left: 5px;
  margin-right: 5px;
  font-weight: 600;
`;
export const Button = styled.button`
  border-radius: 50px;
  width: 40px;
  height: 40px;
  background-color: ${p => p.theme.colors.secondary};
  color: ${p => p.theme.colors.white};
  &:hover {
    color: ${p => p.theme.colors.muted};
  }
`;
export const PowerOffIcon = styled(PowerOff)`
  width: 27px;
  height: 27px;
`;
