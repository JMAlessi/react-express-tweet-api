import { createReducer } from '@reduxjs/toolkit';

const initialState = {
	tweets: [],
	view: 'Elon Musk',
};

const rootReducer = createReducer(initialState, (builder) => {
	builder
		.addCase('UPDATE_TWEETS', (state, action) => {
			state.tweets = action.payload;
		})
		.addCase('UPDATE_VIEW', (state, action) => {
			state.view = action.payload;
		});
});

export default rootReducer;
