import React, { useState, useEffect } from 'react';
// for uploading the file in file base-64
import FileBase from 'react-file-base64';
import { createPost, updatePost } from '../../actions/Memory';
import { useSelector, useDispatch } from 'react-redux';
import {
	Inputfield,
	Mainform,
	Buttons,
	Papercontainer,
	Formheader,
	FileInput,
} from './styles';
import { Typography } from '@mui/material';

function Form({ currentID, setCurrentID }) {
	// creating A state
	const [formData, setFormData] = useState({
		title: '',
		tags: '',
		fileUpload: '',
		message: '',
	});
	const dispatch = useDispatch();
	const user = JSON.parse(localStorage.getItem('profile'));

	// finding id of the editing post
	const memories = useSelector((state) =>
		currentID ? state.memory.find((post) => post._id === currentID) : null
	);

	// using use effect to set the form data whenever memories is provoked
	useEffect(() => {
		if (memories) {
			setFormData(memories);
		}
	}, [memories]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentID === 0) {
			// dispatching and creating a new post with form data value
			dispatch(
				updatePost(currentID, { ...formData, name: user?.result?.name })
			);
		} else {
			// dispathing and updating the post
			// id need to passed and form data to update when the value is updated
			dispatch(createPost({ ...formData, name: user?.result?.name }));
		}

		// to clear the data when value is submitted
		clear();
	};

	// Handling Clear
	const clear = () => {
		setCurrentID(null);
		setFormData({
			title: '',
			tags: '',
			fileUpload: '',
			message: '',
		});
	};

	if (!user?.result?.name) {
		return (
			<Papercontainer>
				<Typography align='center' variant='h6'>
					Please Sign In or Log In to create your own Blog
				</Typography>
			</Papercontainer>
		);
	}
	return (
		<>
			<Papercontainer>
				{/* Form Header */}
				<Formheader variant='h5'>
					{currentID ? 'Editing a Memory' : 'Creating a memory'}
				</Formheader>
				<Mainform noValidate autoComplete='off' onSubmit={handleSubmit}>
					{/* ALL Input Filed */}
					<Inputfield
						name='title'
						variant='outlined'
						type='text'
						value={formData.title}
						onChange={(e) =>
							setFormData({ ...formData, title: e.target.value })
						}
						label='Title'
						fullWidth></Inputfield>
					<Inputfield
						name='message'
						variant='outlined'
						type='text'
						value={formData.message}
						onChange={(e) =>
							setFormData({ ...formData, message: e.target.value })
						}
						label='Message'
						fullWidth></Inputfield>
					<Inputfield
						name='tags'
						variant='outlined'
						value={formData.tags}
						onChange={(e) =>
							setFormData({ ...formData, tags: e.target.value.split(',') })
						}
						label='Tags'
						fullWidth></Inputfield>

					{/* Uploading Input File */}
					<FileInput>
						<FileBase
							type='file'
							multiple={false}
							onDone={({ base64 }) =>
								setFormData({ ...formData, fileUpload: base64 })
							}
						/>
					</FileInput>

					{/* Buttons */}
					<Buttons
						variant='contained'
						size='large'
						type='submit'
						color='primary'
						fullWidth>
						Submit
					</Buttons>
					<Buttons
						variant='contained'
						size='small'
						color='secondary'
						onClick={clear}
						fullWidth>
						Clear
					</Buttons>
				</Mainform>
			</Papercontainer>
		</>
	);
}

export default Form;
