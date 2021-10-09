import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'please Provide name'],
	},
	email: {
		type: String,
		required: [true, 'please Provide name'],
	},
	password: {
		type: String,
		required: [true, 'please Provide name'],
	},
	id: {
		type: String,
	},
});

const userData = mongoose.model('User Data', userSchema);

export default userData;
