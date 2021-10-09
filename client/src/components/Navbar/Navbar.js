import React, { useState, useEffect } from 'react';
import { AppBars, NavHeader, Div, Logbtn, Avatars } from './styles';
import { Toolbar, Typography, Button } from '@mui/material';

import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

const Navbar = () => {
	// getting the user from the local storage
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();

	const logout = () => {
		dispatch({ type: 'LOGOUT' });
		history.push('/');
		setUser(null);
	};

	// to rerender the
	useEffect(() => {
		const token = user?.token;

		if (token) {
			const decodedToken = decode(token);

			if (decodedToken.exp * 1000 < new Date().getTime()) logout();
		}

		setUser(JSON.parse(localStorage.getItem('profile')));
	}, [location]);

	return (
		<>
			{/* this is nav bar */}
			<AppBars position='static'>
				{/* Nav Headers */}
				<div>
					<NavHeader align='center' variant='h4'>
						Blogs
					</NavHeader>
				</div>
				{/* Login Btn */}
				<Toolbar>
					{/* If user is logged In */}
					{user ? (
						<Div>
							<Avatars alt={user?.result.name} src={user?.result.imageURL}>
								{user?.result.name.charAt(0)}
							</Avatars>
							<Typography variant='h6'>{user.result.name}</Typography>
							<Logbtn onClick={logout} variant='contained' color='secondary'>
								Log Out
							</Logbtn>
						</Div>
					) : (
						// If user is logged out
						<Button
							component={Link}
							to='/auth'
							variant='contained'
							color='secondary'>
							Log In
						</Button>
					)}
				</Toolbar>
			</AppBars>
		</>
	);
};

export default Navbar;
