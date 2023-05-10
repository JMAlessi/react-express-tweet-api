import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

function* fetchTweets(action) {
	try {
		const { data } = yield axios.get(
			`https://api.twitter.com/1.1/search/tweets.json?q=from:${action.payload}&result_type=recent&count=10`,
			{
				headers: {
					Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
				},
			}
		);

		yield put({ type: 'UPDATE_TWEETS', payload: data.statuses });
	} catch (error) {
		console.error(error);
	}
}

function* watchFetchTweets() {
	yield takeLatest('FETCH_TWEETS', fetchTweets);
}

export default function* rootSaga() {
	yield all([watchFetchTweets()]);
}
