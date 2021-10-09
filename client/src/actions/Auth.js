import { AUTH } from '../constant/Constant';
// importing all data as api
import * as api from '../api';

export const signIn = (formData, history) => async (dispatch) => {
	try {
		// calling an API call for the db
		const { data } = await api.signin(formData);
		// navigating to the home page
		dispatch({ type: AUTH, data });
		history.push('/');
	} catch (error) {
		console.log(error);
	}
};

export const signUp = (formData, history) => async (dispatch) => {
	try {
		// calling an API call for the db
		const { data } = await api.signup(formData);
		dispatch({ type: AUTH, data });

		// navigating to the home page
		history.push('/');
	} catch (error) {
		console.log(error);
	}
};
