import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import tweetsReducer from './ducks/tweets';
import { watcherSaga } from './sagas';

const reducer = combineReducers({
    tweets: tweetsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware,];

const store = configureStore(
    reducer, {}, applyMiddleware(...middleware)
);

sagaMiddleware.run(watcherSaga);

export default store;