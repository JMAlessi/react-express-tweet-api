import { createAction } from '@reduxjs/toolkit';

export const fetchTweets = createAction('FETCH_TWEETS', (user) => ({
	payload: user,
}));

export const updateView = createAction('UPDATE_VIEW', (view) => ({
	payload: view,
}));
