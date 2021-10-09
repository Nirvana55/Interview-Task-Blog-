import { createTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const makeTheme = createTheme({
	typography: {
		fontFamily: 'Montserrat',
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
});

export { makeTheme };
