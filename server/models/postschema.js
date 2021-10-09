import mongoose from 'mongoose';

// creating a structure of the data and putting the validation
const memorySchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'please provide title'],
		trim: true,
		maxlength: [20, 'please provide less than 20'],
	},
	name: String,
	message: { type: String, required: [true, 'please type any detail'] },
	creator: String,
	tags: [String],
	fileUpload: String,
	likes: {
		type: [String],
		default: [],
	},
	comments: {
		type: [String],
		default: [],
	},
	date: {
		type: Date,
		default: new Date(),
	},
});

// using models to apply the CRUD structure
const memoryTask = mongoose.model('memory structure', memorySchema);

export default memoryTask;
