import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/styles.css';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';

// Data fetching in the redux
// using redux thunnk in apply middle Ware
// it will help to use a async function instead of the actions in action controllers
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
	<React.StrictMode>
		{/* providing all the reducers to the app */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
