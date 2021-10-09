import { combineReducers } from 'redux';
import memory from './reducer';
import auth from './Auth';

// in here we can use all the individual reducers we have
export default combineReducers({
	memory,
	auth,
});
