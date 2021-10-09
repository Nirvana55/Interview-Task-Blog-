import {
	Card,
	CardMedia,
	IconButton,
	Typography,
	CardActions,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const Cardcontainer = styled(Card)({
	position: 'relative',
	borderRadius: '15px',
	height: '100%',
});

const Media = styled(CardMedia)({
	height: '250px',
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
	backgroundBlendMode: 'darken',
	objectFit: 'cover',
});

const Mediaheader = styled('div')({
	position: 'absolute',
	top: '10px',
	left: '15px',
	color: 'white',
});

const MoreBtn = styled(IconButton)({
	position: 'absolute',
	right: '15px',
	top: '10px',
	color: 'white',
	cursor: 'pointer',
});

const Cardtag = styled(Typography)({
	padding: '0.5rem 15px',
});

const Cardfooter = styled(CardActions)({
	display: 'flex',
	justifyContent: 'space-between',
});

export { Cardcontainer, Media, MoreBtn, Cardtag, Cardfooter, Mediaheader };
