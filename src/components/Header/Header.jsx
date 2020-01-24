import React from 'react';
import { HeaderStyled, HeaderTitle } from './HeaderStyled';
import { Points } from '../Points';

export const Header = () => {
  return (
    <HeaderStyled>
      <HeaderTitle>akinator</HeaderTitle>
      <Points />
    </HeaderStyled>
  );
};
