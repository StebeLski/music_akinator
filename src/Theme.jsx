import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import PropTypes from 'prop-types';

const GlobalStyle = createGlobalStyle`
	${normalize}

	@import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

	* {
		margin: 0;
		box-sizing: border-box;
	}

	html,
	body {
		font-family: ${({ theme }) => theme.text.fontFamily};
		color: ${({ theme }) => theme.colors.textPrimary};
    background-color: ${({ theme }) => theme.colors.lightDark};
	}
  
`;

export const size = {
  mobile: 500,
  tablet: 769,
  laptop: 1024,
  desktop: 1500,
};

export const theme = {
  colors: {
    textPrimary: '#E9EAEA',
    textSecondary: '#828385',
    pink: '#C7A1CB',
    green: '#58B684',
    red: '#EB5353',
    lightDark: '#1F2023',
    dark: '#1C1D1F',
  },
  text: {
    fontFamily: `'Roboto', sans-serif`,
  },
  device: {
    mobile: `(max-width: ${size.mobile}px)`,
    tablet: `(min-width: ${size.mobile}px) and (max-width: ${size.tablet - 1}px)`,
    laptop: `(min-width: ${size.tablet}px) and (max-width: ${size.laptop - 1}px)`,
    desktop: `(min-width: ${size.laptop}px) and (max-width: ${size.desktop - 1}px)`,
    wideScreen: `(min-width: ${size.desktop}px)`,
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
