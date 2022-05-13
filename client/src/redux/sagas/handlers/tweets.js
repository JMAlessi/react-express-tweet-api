import { call, put, takeEvery } from 'redux-saga/effects';
import { getApi } from '../requests/tweets';

export function* fetchTweets(action) {
    try {
        const tweets = yield call(getApi);
        yield put({ type: 'GET_TWEETS_SUCCESS', tweets: tweets });
    } catch (error) {
        yield put({ type: 'GET_TWEETS_FAILED', message: error.message });
    };
}

function* tweetSaga() {
    yield takeEvery('GET_TWEETS_REQUESTED', fetchTweets);
};

export default tweetSaga;