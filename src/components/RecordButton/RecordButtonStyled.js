import styled from 'styled-components';

export const RecordButtonStyled = styled.button`
  position: relative;
  width: 64px;
  height: 64px;
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
  top: 21px;
  left: 25px;
`;
