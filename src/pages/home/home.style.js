import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* margin-top: 50px; */
  border-radius: 12px;
  background-color: rgb(238, 241, 243, 0.8);
  box-shadow: 1px 11px 28px -9px rgba(192, 192, 192, 1);
  width: 250px;
  height: 300px;
  margin: 60px auto;
`;
export const AuthForm = styled(NavLink)`
  text-align: center;
  margin-bottom: 10px;
  padding: 5px;
  min-width: 170px;
  min-height: 40px;
  font-family: 'Great Vibes', cursive;
  font-size: large;
  border-radius: 14px;
  background-color: #181818;
  color: ${p => p.theme.colors.white};
  &:hover {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.muted};
  }
`;
