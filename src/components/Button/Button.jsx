import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './ButtonStyled';

export const Button = props => <ButtonStyled {...props}>{props.children}</ButtonStyled>;

Button.propTypes = {
  color: PropTypes.string,
  primary: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  color: 'pink',
  primary: false,
};
