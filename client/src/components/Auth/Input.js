import React from 'react';
import { Grid, TextField, IconButton, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// Creating a custom Input Field
// passing props
const Input = ({
	name,
	handleChange,
	label,
	autoFocus,
	type,
	handleShowPassword,
	half,
}) => {
	return (
		<>
			{/* creating a textfield for Sign In */}
			{/* half for creating half inputs */}
			<Grid item xs={12} sm={half ? 6 : 12}>
				<TextField
					name={name}
					onChange={handleChange}
					variant='outlined'
					required
					fullWidth
					label={label}
					autoFocus={autoFocus}
					type={type}
					// to keep btn
					InputProps={
						// if password exist it will show visibility btn
						name === 'password'
							? {
									endAdornment: (
										<InputAdornment position='end'>
											<IconButton onClick={handleShowPassword}>
												{/* if type is password it will show visibility btn */}
												{type === 'password' ? (
													<VisibilityIcon />
												) : (
													<VisibilityOffIcon />
												)}
											</IconButton>
										</InputAdornment>
									),
							  }
							: null
					}
				/>
			</Grid>
		</>
	);
};

export default Input;
