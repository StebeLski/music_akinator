import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: ${({ theme, color }) => theme.colors[color]};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Button = (props) => (
  <ButtonStyled {...props}>
    {props.children}
  </ButtonStyled>
);
