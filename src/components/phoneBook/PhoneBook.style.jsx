import styled from 'styled-components';

export const BookForm = styled.form`
  padding: 20px;
  margin: 20px auto;
  border-radius: ${p => p.theme.radii.md};
  border: solid ${p => p.theme.colors.text} 1px;
  width: 270px;
`;
export const BookLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
