import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import ViewA from './components/ViewA';
import ViewB from './components/ViewB';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<NavigationBar />
				<Routes>
					<Route
						exact
						path="/"
						component={ViewA}
					/>
					<Route
						path="/view-a"
						component={ViewA}
					/>
					<Route
						path="/view-b"
						component={ViewB}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
