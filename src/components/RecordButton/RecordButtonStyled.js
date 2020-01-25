import styled from 'styled-components';

export const RecordButtonStyled = styled.button`
  position: relative;
  width: 128px;
  height: 128px;
  border: none;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.dark};
  transition: background-color 0.3s;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.pink};
  }

  &:focus {
    outline: none;
  }
`;

export const MicroIcon = styled.svg`
  position: absolute;
  top: 42px;
  left: 50px;
`;

export const Path = styled.path`
  fill: #828385;
  transition: 0.3s;

  ${RecordButtonStyled}:hover & {
    fill: #1f2023;
  }
`;

export const RecordButtonContainer = styled.div`
  transition: 0.3s;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
`;
