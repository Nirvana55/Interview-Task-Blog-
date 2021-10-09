import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { CommentInput } from './styles';
import { commentPost } from '../../actions/Memory';
import { Typography } from '@mui/material';

const Comments = ({ memory }) => {
	const [comment, setComment] = useState('');
	const [comments, setComments] = useState([]);

	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem('profile'));

	const handleSubmit = async (e) => {
		e.preventDefault();
		// if the user press enter
		_handleKeyDown: if (e.key === 'Enter') {
			const finalComment = `${user.result.name}: ${comment}`;
			const newComment = await dispatch(commentPost(finalComment, memory._id));
			setComments(newComment);
			setComment('');
		}
	};
	return (
		<>
			{/* comment map */}
			<div>
				{comments.map((comment, i) => {
					return (
						<>
							<Typography key={i} gutterBottom variant='subtitle1'>
								{comment}
							</Typography>
						</>
					);
				})}
			</div>
			{/* if there is no any user comment will not be shown */}
			{user?.result?.name && (
				<form onSubmit={handleSubmit}>
					<CommentInput
						fullWidth
						variant='outlined'
						multiline
						type='submit'
						placeholder='write a comment'
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
				</form>
			)}
		</>
	);
};

export default Comments;
