import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainHeader = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 36px;
  font-weight: normal;
`;
