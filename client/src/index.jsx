import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>
);
