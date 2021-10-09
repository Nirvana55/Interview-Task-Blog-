import { styled } from '@mui/material/styles';
import { Paper, TextField, Button, Typography } from '@mui/material';

const Inputfield = styled(TextField)((theme) => ({
	margin: '0.5rem 0',
}));

const Mainform = styled('form')({
	margin: '0.5rem 0',
});

const Buttons = styled(Button)({
	margin: '0.2rem 0',
});

const Papercontainer = styled(Paper)({
	padding: '0.5em',
});

const Formheader = styled(Typography)({
	textAlign: 'center',
});

const FileInput = styled('div')({
	margin: '0.3rem 0',
});

export { Inputfield, Mainform, Buttons, Papercontainer, Formheader, FileInput };
