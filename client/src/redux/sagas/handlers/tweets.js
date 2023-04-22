import { call, put } from 'redux-saga/effects';
import { getApi } from '../requests/tweets';
import { GET_TWEETS_SUCCESS, GET_TWEETS_FAILED } from '../ducks/tweets';

export function* fetchTweets(action) {
	try {
		const tweets = yield call(getApi);
		yield put({ type: GET_TWEETS_SUCCESS, tweets });
	} catch (error) {
		yield put({ type: GET_TWEETS_FAILED, message: error.message });
	}
}

export default function* tweetSaga() {
	yield takeEvery('GET_TWEETS_REQUESTED', fetchTweets);
}
