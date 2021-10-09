// creating a global async wrapper
const asyncWrapper = (fn) => {
	// since queries are not a promis but we can still create a try catch
	// creating async
	return async (req, res, next) => {
		try {
			// parameter
			fn(req, res, next);
		} catch (error) {
			// next will give a default error
			// so we are customizing the error
			next(error);
		}
	};
};

export default asyncWrapper;
