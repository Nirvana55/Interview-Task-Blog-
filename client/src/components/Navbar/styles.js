import { AppBar, Button, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const AppBars = styled(AppBar)({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	borderRadius: '5px',
	margin: '1.3rem 0',
	padding: '0.5em 0',
	flexDirection: 'row',
});

const NavHeader = styled(Typography)({
	padding: '0 12px',
});

const Div = styled('div')({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
});

const Logbtn = styled(Button)({
	margin: '0 16px',
});

const Avatars = styled(Avatar)({
	margin: '0 16px',
});

export { AppBars, NavHeader, Div, Logbtn, Avatars };
