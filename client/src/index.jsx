import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	root
);
