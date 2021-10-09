import mongoose from 'mongoose';

const connectingDB = (url) => {
	// connecting the MONGODB URL
	return mongoose.connect(url);
};

export default connectingDB;
