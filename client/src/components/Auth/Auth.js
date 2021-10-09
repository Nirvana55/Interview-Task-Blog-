import React, { useState } from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import { Avatars, Form, Papers, SignupBtn } from './styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signUp, signIn } from '../../actions/Auth';

const initialFormData = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
};

const Auth = () => {
	// password state for showing or not
	const [showPassword, setShowPassword] = useState(false);
	// for toggling the form
	const [isSignup, setSignUp] = useState(false);
	// form Data
	const [formData, setFormData] = useState(initialFormData);
	// importing dispatch
	const dispatch = useDispatch();
	// importing history
	const history = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		if (isSignup) {
			// form data to pass the value into DB
			// history to navigate
			console.log('hey');
			dispatch(signUp(formData, history));
		} else {
			// form data to pass the value into DB
			// history to navigate
			console.log('wo');
			dispatch(signIn(formData, history));
		}
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const switchSignIn = () => {
		// form toggled
		setSignUp(!isSignup);
		// password showing as false
		setShowPassword(false);
	};
	return (
		<>
			<Container component='main' maxWidth='xs'>
				<Papers elevation={3}>
					<Avatars>
						<LockOutlinedIcon />
					</Avatars>
					{/* if sign is false it will so sign up or sing in */}
					<Typography variant='h5'>
						{isSignup ? 'Sign Up' : 'Sign In'}
					</Typography>
					<Form onSubmit={handleSubmit}>
						<Grid container spacing={2}>
							{isSignup && (
								<>
									{/* Importing Input Component  */}
									{/* First Name */}
									<Input
										name='firstName'
										label='First Name'
										handleChange={handleChange}
										autoFocus
										half
									/>
									{/* Last Name */}
									<Input
										name='lastName'
										label='Last Name'
										handleChange={handleChange}
										half
									/>
								</>
							)}
							{/* Email Address */}
							<Input
								name='email'
								label='Email Address'
								handleChange={handleChange}
								type='email'
							/>
							{/* Password */}
							<Input
								name='password'
								label='Password'
								handleChange={handleChange}
								type={showPassword ? 'text' : 'password'}
								handleShowPassword={handleShowPassword}
							/>
							{/* If sign up is false it will show confirm password */}
							{isSignup && (
								<Input
									name='confirmPassword'
									label='Repeat Password'
									handleChange={handleChange}
									type='password'
									handleShowPassword={handleShowPassword}
								/>
							)}
						</Grid>
						{/* If signup is false it will show Sign Up */}
						<SignupBtn
							type='submit'
							fullWidth
							variant='contained'
							color='primary'>
							{isSignup ? 'Sign Up' : 'Sign In'}
						</SignupBtn>
						{/* for already have an account or not */}
						<Grid container>
							<Button onClick={switchSignIn}>
								{isSignup
									? 'Already have an account. Log In'
									: 'Dont have account ? Sign In'}
							</Button>
						</Grid>
					</Form>
				</Papers>
			</Container>
		</>
	);
};

export default Auth;
