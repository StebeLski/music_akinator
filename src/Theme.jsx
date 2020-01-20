import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

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
		background-color: ${({ theme }) => theme.colors.lightDark};
		color: ${({ theme }) => theme.colors.textPrimary};
	}
`;

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
};

export const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		{children}
	</ThemeProvider>
);
