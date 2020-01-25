import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin-top: 7rem;
`;

export const MainTitle = styled.h2`
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

export const GameContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  min-width: 360px;
`;

export const AnswerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 550px;
  margin-bottom: 4rem;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: space-evenly;
  text-align: center;
  height: 120px;
`;
