const http = require('http');
const path = require('path');
const express = require('express');
const cors = require('cors');
const ReactDOMServer = require('react-dom/server');
const fetch = require('node-fetch');

const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Import redux-related files
const { createStore, applyMiddleware } = require('redux');
const thunkMiddleware = require('redux-thunk').default;
const { Provider } = require('react-redux');
const rootReducer = require('./redux/reducers').default;

// Import React components
const App = require('./App').default;
const { ViewA, ViewB } = require('./components');

// Set up Redux store
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// Set up React app with Redux provider
app.get('/', (req, res) => {
	const jsx = (
		<Provider store={store}>
			<App />
		</Provider>
	);
	const html = ReactDOMServer.renderToString(jsx);

	res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Twitter Stream</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/static/js/main.js"></script>
      </body>
    </html>
  `);
});

// Define routes for ViewA and ViewB
app.get('/view-a', (req, res) => {
	const jsx = (
		<Provider store={store}>
			<ViewA />
		</Provider>
	);
	const html = ReactDOMServer.renderToString(jsx);

	res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Twitter Stream - View A</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/static/js/main.js"></script>
      </body>
    </html>
  `);
});

app.get('/view-b', (req, res) => {
	const jsx = (
		<Provider store={store}>
			<ViewB />
		</Provider>
	);
	const html = ReactDOMServer.renderToString(jsx);

	res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Twitter Stream - View B</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="/static/js/main.js"></script>
      </body>
    </html>
  `);
});

// Serve static files
app.use(
	'/static',
	express.static(path.join(__dirname, '../client/build/static'))
);

// Set up API endpoint to fetch tweets
app.get('/tweets', async (req, res) => {
	const { view } = req.query;
	const username = view === 'Elon Musk' ? 'elonmusk' : 'Tesla';

	try {
		const response = await fetch(
			`https://api.twitter.com/2/users/by/username/${username}`,
			{
				headers: {
					Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
				},
			}
		);

		const data = await response.json();
		const userId = data.data.id;

		const tweetsResponse = await fetch(
			`https://api.twitter.com/2/users/${userId}/tweets`,
			{
				headers: {
					Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
				},
			}
		);
		const tweetsData = await tweetsResponse.json();

		res.json(tweetsData);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'An error occurred while fetching tweets.' });
	}
});
