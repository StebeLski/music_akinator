import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
`;

export const HeaderTitle = styled.h1`
  margin: 0 0 0 5rem;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 18px;
  font-weight: normal;
`;
