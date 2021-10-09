import {
	FETCH_ALL,
	CREATE_POST,
	DELETE_POST,
	UPDATE_POST,
	LIKED_POST,
	COMMENT_POST,
} from '../constant/Constant';

export default (memory = [], action) => {
	switch (action.type) {
		case FETCH_ALL:
			// returning all data
			return action.payload;
		// creating a post
		case CREATE_POST:
			// creating a post
			// returning before post and adding new data
			return [...memory, action.payload];
		case DELETE_POST:
			// filitiring the data
			return memory.filter((post) => post._id !== action.payload);
		case UPDATE_POST:
		case LIKED_POST:
			// updating post
			// returning a new array
			return memory.map((memories) => {
				// when id === action id
				// we will update the array with new value action.payload or just keep what it is
				return memories._id === action.payload._id ? action.payload : memories;
			});
		case COMMENT_POST:
			return memory.map((comment) => {
				if (comment._id === action.payload._id) {
					return action.payload;
				}
				return comment;
			});
		default:
			return memory;
	}
};
