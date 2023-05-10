import {
	configureStore,
	getDefaultMiddleware,
	createAction,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const fetchViewATweets = createAction('FETCH_VIEW_A_TWEETS');
const fetchViewBTweets = createAction('FETCH_VIEW_B_TWEETS');

const middleware = [...getDefaultMiddleware(), sagaMiddleware];

const store = configureStore({
	reducer: rootReducer,
	middleware,
});

sagaMiddleware.run(rootSaga);

export { store, fetchViewATweets, fetchViewBTweets };
