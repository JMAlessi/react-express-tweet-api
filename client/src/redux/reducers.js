import { createReducer } from '@reduxjs/toolkit';

const initialState = {
	tweets: [],
	view: 'Elon Musk',
};

const rootReducer = createReducer(initialState, {
	UPDATE_TWEETS: (state, action) => {
		state.tweets = action.payload;
	},
	UPDATE_VIEW: (state, action) => {
		state.view = action.payload;
	},
});

export default rootReducer;
