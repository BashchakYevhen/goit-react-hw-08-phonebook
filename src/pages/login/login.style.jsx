import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: 100px auto;
  width: 420px;
  min-height: 300px;
  border-radius: 12px;
  background-color: rgb(238, 241, 243, 0.8);
  box-shadow: 1px 11px 28px -9px rgba(192, 192, 192, 1);
`;
export const ButtonStyle = styled.button`
  padding: 5px;
  width: 170px;
  height: 40px;

  font-size: large;
  border-radius: 14px;
  background-color: #181818;
  color: ${p => p.theme.colors.white};
  &:hover {
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.muted};
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
