const customError = (req, res) => {
	res.status(500).send('Internal Server Error');
};

export default customError;
