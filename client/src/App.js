import React from 'react';
import { Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { makeTheme } from './styles';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

function App() {
	return (
		<>
			<BrowserRouter>
				<ThemeProvider theme={makeTheme}>
					<Container maxWidth='xl'>
						{/* Nav Bar Component */}
						<Navbar />
						{/* Creating Router Path */}
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/auth' exact component={Auth} />
						</Switch>
					</Container>
				</ThemeProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
