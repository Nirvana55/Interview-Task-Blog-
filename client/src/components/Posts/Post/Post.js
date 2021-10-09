import React from 'react';
import { CardContent, Button, Tooltip, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import moment from 'moment';
import { deletedPost, likedPost } from '../../../actions/Memory';
import { useDispatch } from 'react-redux';
import { Fade } from '@mui/material';
import Comments from '../../Comments/Comments';
import {
	Cardcontainer,
	Media,
	MoreBtn,
	Cardtag,
	Cardfooter,
	Mediaheader,
} from './styles';

const Post = ({ memory, setCurrentID }) => {
	// using dispatch
	const dispatch = useDispatch();
	// destructing the memory
	const { fileUpload, _id, title, name, date, tags, message, likes } = memory;
	const user = JSON.parse(localStorage.getItem('profile'));

	// like component
	const Likes = () => {
		// if like length is greater than 0
		if (likes.length > 0) {
			return likes.find((like) => like === user?.result?._id) ? (
				<>
					<ThumbUpAltIcon fontSize='small' /> &nbsp;
					{likes.length > 2
						? `You and ${likes.length - 1} others`
						: `${likes.length} like${likes.length > 1 ? 's' : ''}`}
				</>
			) : (
				<>
					<ThumbUpAltOutlinedIcon fontSize='small' /> &nbsp;{likes.length}
					{likes.length === 1 ? 'Like' : 'Likes'}
				</>
			);
		}
		return (
			<>
				<ThumbUpAltOutlinedIcon fontSize='small' />
				&nbsp;Like
			</>
		);
	};

	return (
		<Cardcontainer>
			{/* card media image */}
			<Media image={fileUpload} title={title} />
			{/* name and date */}
			<Mediaheader>
				<Typography variant='h6'>{name}</Typography>
				{/* using moment library to keep the update time */}
				<Typography variant='body2'>{moment(date).fromNow()}</Typography>
			</Mediaheader>
			{/* Edit */}
			{user?.result?._id !== memory?.creator && (
				<div>
					<Tooltip
						title='Edit'
						TransitionComponent={Fade}
						TransitionProps={{ timeout: 600 }}>
						<MoreBtn size='small' onClick={() => setCurrentID(_id)}>
							<MoreHorizIcon />
						</MoreBtn>
					</Tooltip>
				</div>
			)}

			{/* tags */}
			<div>
				<Cardtag variant='body2' color='textSecondary'>
					{tags.map((allTag) => `#${allTag}`)}
				</Cardtag>
			</div>
			{/* title */}
			<Cardtag variant='h5'>{title}</Cardtag>
			{/* msg */}
			<CardContent>
				<Typography variant='body2' gutterBottom>
					{message}
				</Typography>
			</CardContent>
			{/* Buttons for like and delete */}
			<Cardfooter>
				<Button
					color='primary'
					disabled={!user?.result}
					onClick={() => dispatch(likedPost(_id))}>
					<Likes />
				</Button>
				{user?.result?._id !== memory?.creator && (
					<Button color='primary' onClick={() => dispatch(deletedPost(_id))}>
						<DeleteIcon fontSize='small' /> Delete
					</Button>
				)}
			</Cardfooter>
			<Comments />
		</Cardcontainer>
	);
};

export default Post;
