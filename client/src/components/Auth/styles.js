import { styled } from '@mui/system';
import { Paper, Avatar, Button } from '@mui/material';

const Papers = styled(Paper)({
	padding: '10px',
});

const Avatars = styled(Avatar)({
	margin: '10px auto',
	color: 'red',
});

const Form = styled('form')({
	margin: '10px 0',
});

const SignupBtn = styled(Button)({
	margin: '10px 0',
});

export { Papers, Avatars, Form, SignupBtn };
