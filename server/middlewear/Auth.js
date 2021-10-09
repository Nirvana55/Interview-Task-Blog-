import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const auth = async (req, res, next) => {
	try {
		// taking data from the frontend
		const token = req.headers.authorization.split(' ')[1];
		// for our custom Authentication
		const customAuth = token.length < 500;

		let decodedData;
		if (token && customAuth) {
			// this will give the data from the each token
			decodedData = jwt.verify(token, process.env.Text);

			// storing user id to decoded data
			// optional chaining ?
			req.userId = decodedData?.id;
		}
		// pass to another task
		next();
	} catch (error) {
		console.log(error);
	}
};

export default auth;
