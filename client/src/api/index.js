import axios from 'axios';

// URL LINK
// SO THAT WE CAN USE MORE FUNCTIONS OF AXIOS
const API = axios.create({ baseURL: 'http://localhost:5000' });

// It will call in each request by the user
API.interceptors.request.use((req) => {
	// taking data from the local storage
	if (localStorage.getItem('profile')) {
		// sending data to backend in every request
		req.headers.Authorization = `Bearer ${
			JSON.parse(localStorage.getItem('profile')).token
		}`;
	}

	// for further request
	return req;
});

// AXIOS WILL TAKE ALL THE BROWSER METHOD AND REQ
// here axios is only taking the get method from the url
export const fetchPost = () => API.get('/api/v1/memory');

// creating a newPost and passing the parameter
// to post we need url and the post(body) that need to added
export const createPost = (newPost) => API.post('/api/v1/memory', newPost);

// updating with the json strucutre data
//axios is so smart that it will keep the headers itself
export const updatedPost = (id, allPost) =>
	API.patch(`/api/v1/memory/${id}`, allPost);

// requesting to delete the current id from the server with url and id of the selected id and
export const deletePost = (id) => API.delete(`/api/v1/memory/${id}`);

// requesting to like the post of current id from the server with url and id of the selected id and
export const likedPost = (id) => API.patch(`/api/v1/memory/${id}/likepost`);

export const comment = (value, id) =>
	API.post(`/api/v1/memory/${id}/commentpost`, { value });

// SIGNIN API
export const signin = (formData) => API.post('/users/signin', formData);
// SIGN UP API
export const signup = (formData) => API.post('/users/signup', formData);
