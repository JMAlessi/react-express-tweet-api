import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
						path="/"
						element={<ViewA />}
					/>
					<Route
						path="/view-a"
						element={<ViewA />}
					/>
					<Route
						path="/view-b"
						element={<ViewB />}
					/>
				</Routes>
			</div>
		</BrowserRouter>
	);
};

export default App;
