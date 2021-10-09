import {
	FETCH_ALL,
	CREATE_POST,
	DELETE_POST,
	UPDATE_POST,
	LIKED_POST,
	COMMENT_POST,
} from '../constant/Constant';
// importing all data as api
import * as api from '../api';

//action controllers are all who control the action
// redux-thunk allows to create a async dispatch function
export const getPost = () => async (dispatch) => {
	try {
		// we are waiting for the backend data
		const { data } = await api.fetchPost();
		// instead of return redux thunk will let us dispatch
		// which redux will allow to use it
		// it can be as object
		dispatch({ type: FETCH_ALL, payload: data });
	} catch (error) {
		console.log(error);
	}
};

// passing post as paramter
// we need to pass body as argument so
export const createPost = (post) => async (dispatch) => {
	try {
		// data from the db and sending the value from frontend
		const { data } = await api.createPost(post);
		// payload as data
		dispatch({ type: CREATE_POST, payload: data });
	} catch (error) {
		console.log(error);
	}
};

// updating post
// id of the selected post and all post the data of the selected id
export const updatePost = (id, allPost) => async (dispatch) => {
	try {
		// data from the db and sending the value from frontend
		const { data } = await api.updatedPost(id, allPost);
		dispatch({ type: UPDATE_POST, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deletedPost = (id) => async (dispatch) => {
	try {
		// data from the db and sending the value from frontend
		await api.deletePost(id);
		dispatch({ type: DELETE_POST, payload: id });
	} catch (error) {
		console.log(error);
	}
};

export const likedPost = (id) => async (dispatch) => {
	try {
		// data from the db and sending the value from frontend
		const { data } = await api.likedPost(id);
		dispatch({ type: LIKED_POST, payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const commentPost = (value, id) => async (dispatch) => {
	try {
		// data from the db and sending the value from frontend
		const { data } = await api.comment(value, id);
		dispatch({ type: COMMENT_POST, payload: data });
		// for upcoming comments
		return data.comments;
	} catch (error) {
		console.log(error);
	}
};
