import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonStyled = styled.button`
  background-color: ${({ theme, color }) => theme.colors[color]};
  color: ${({ theme, primary }) => (primary ? theme.colors.textPrimary : theme.colors.dark)};
`;

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
