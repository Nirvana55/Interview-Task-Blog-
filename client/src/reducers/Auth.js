import { AUTH, LOGOUT } from '../constant/Constant';

const authReducer = (state = { authData: null }, action) => {
	switch (action.type) {
		case AUTH:
			// setting local storage so that browser can know user is logged in or not
			localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
			return {
				...state,
				authData: action.data,
			};
		// clearing the local storage
		case LOGOUT:
			localStorage.clear();
			return {
				...state,
				authData: null,
			};
		default:
			return state;
	}
};

export default authReducer;
