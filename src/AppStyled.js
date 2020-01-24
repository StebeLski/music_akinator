import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
`;

export const MainHeader = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 36px;
  margin-bottom: 1.5rem;
  font-weight: normal;
`;

export const MainSubtitle = styled.span`
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 22px;
`;
