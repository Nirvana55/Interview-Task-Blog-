import React, { useState, useEffect } from 'react';
import { Grow, Grid } from '@mui/material';
import Posts from '../../components/Posts/Posts';
import Form from '../../components/Forms/Form';
// IMPORTING USE DISPATCH
import { useDispatch } from 'react-redux';
// IMPORTING GETPOST function from the actions post
import { getPost } from '../../actions/Memory';

const Home = () => {
	const [currentID, setCurrentID] = useState(null);
	// CALLING DISPATCH HOOK
	// this allows to use the dispatch of the redux
	const dispatch = useDispatch();

	// USE EFFECT WILL HELP TO USE DIPSATCH SINCE IT WILL RE-RENDER AND HELP TO USE THE DISPATCH
	useEffect(() => {
		// AS SOON AS THE DISPACTH FUNCTION IS CALL IT WILL CALL THE GET POST
		// using dispatch function like redux dipstach
		dispatch(getPost());
	}, [dispatch]);
	return (
		<>
			{/* Grow in is a animation */}
			<Grow in>
				{/* creating a grid container */}
				<Grid container direction='row' spacing={2}>
					<Grid xs={12} md={8} item>
						{/* Posts Component */}
						<Posts setCurrentID={setCurrentID} />
					</Grid>
					<Grid xs={12} md={4} item>
						{/* Form Component */}
						<Form currentID={currentID} setCurrentID={setCurrentID} />
					</Grid>
				</Grid>
			</Grow>
		</>
	);
};

export default Home;
