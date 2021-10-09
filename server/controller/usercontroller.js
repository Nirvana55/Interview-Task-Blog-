// importing bycrypt to hash the password
// even if the db is hacked the pwd will be in hash form
import bcrypt from 'bcryptjs';
// json web token
// store user into the browser for some period of time
import jwt from 'jsonwebtoken';
//userSchema
import userData from '../models/userschema.js';
import dotenv from 'dotenv';

// for process.env file
dotenv.config();

export const signUp = async (req, res) => {
	// requesting the body
	const { email, password, firstName, lastName, confirmPassword } = req.body;
	console.log(email);
	try {
		// Finding the email
		const existingUser = await userData.findOne({ email });
		//  if the user exist msg will be there that user already exist
		if (existingUser)
			return res.status(400).json({ msg: 'User already exist' });

		// if password and confirm password dont match it will say an error
		if (password !== confirmPassword)
			return res
				.status(400)
				.json({ msg: 'Password dont match with confirm password' });

		// hashing the password
		const hashPassword = await bcrypt.hash(password, 12);
		// Creating a new user in the database
		const result = await userData.create({
			name: `${firstName} ${lastName}`,
			email,
			password: hashPassword,
			confirmPassword: hashPassword,
		});
		console.log(result);
		// JWT token for the user
		const token = jwt.sign(
			{ email: result.email, id: result._id },
			process.env.text,
			{ expiresIn: '1hr' }
		);
		// success response
		res.status(200).json({ result, token });
	} catch (error) {
		res.status(500).json({ msg: 'Internal Server Error' });
	}
};

export const signIn = async (req, res) => {
	// requesting body
	const { email, password } = req.body;
	try {
		// finding User
		const existingUser = await userData.findOne({ email });
		// if user is not found
		if (!existingUser)
			return res.status(404).json({ msg: 'User doesnot exist' });

		// if password is wrong
		const passwordCheck = await bcrypt.compare(password, existingUser.password);
		if (!passwordCheck) return res.status(404).json({ msg: 'Wrong Password' });

		// JWT TOKEN for the user
		const token = jwt.sign(
			{ email: existingUser.email, id: existingUser._id },
			process.env.text,
			{ expiresIn: '1hr' }
		);
		// success resonse
		res.status(200).json({ result: existingUser, token });
	} catch (error) {
		res.status(500).json({ msg: 'Internal Server Error' });
	}
};
