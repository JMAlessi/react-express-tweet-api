import { takeLatest } from 'redux-saga/effects';
import { fetchTweets } from './handlers/tweets';
import { GET_TWEETS_REQUESTED } from '../ducks/tweets';

export function* watcherSaga() {
	yield takeLatest(GET_TWEETS_REQUESTED, fetchTweets);
}
