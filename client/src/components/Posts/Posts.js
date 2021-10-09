import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@mui/material';

const Posts = ({ setCurrentID }) => {
	// use selector helps to select the  whole global redux state
	// it helps to retrieve data from the components
	const memoryPost = useSelector((state) => state.memory);
	return (
		<>
			{!memoryPost.length ? (
				<CircularProgress />
			) : (
				<>
					<Grid container alignItems='stretch' spacing={3}>
						{memoryPost.map((memories, index) => {
							return (
								<Grid key={index} item xs={12} sm={6} md={4}>
									<Post memory={memories} setCurrentID={setCurrentID} />
								</Grid>
							);
						})}
					</Grid>
				</>
			)}
		</>
	);
};

export default Posts;
