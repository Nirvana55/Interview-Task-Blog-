import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mainRoute from './routes/allRoute.js';
import userRouter from './routes/user.js';
// always give file extension when importing in node or express
import connectingDB from './database/ConnectMDB.js';
import customError from './errors/customerror.js';

// ENV-ENVIRONMENTAL VARIABLES
// dotenv file configuration
dotenv.config();
// express function
const app = express();
// port
const port = process.env.Port || 5000;

// bodyParser for posting
// it will help to get the data from the input field
// REQ.BODY TO GET THAT DATA
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// using cors-- to setup the security
// to setup the ACL
app.use(cors());

// creating a global route, router is the route
app.use('/api/v1/memory', mainRoute);
// creating a userRoute
app.use('/users', userRouter);
// importing the custom error
app.use(customError);

const startingDB = async () => {
	try {
		// importing connecting DB mongoose URL to connect in DB
		await connectingDB(process.env.MONGO_URL);
		// starting server
		app.listen(port, console.log(`server is listening in port ${port}...`));
	} catch (error) {
		// console.logging server
		console.log(`this is the error ${error}`);
	}
};

startingDB();
