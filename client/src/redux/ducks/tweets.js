/* Ducks architecture
tweets.js */

// Types
export const GET_TWEETS_REQUESTED = 'tweets/GET_TWEETS_REQUESTED';
export const GET_TWEETS_SUCCESS = 'tweets/GET_TWEETS_SUCCESS';
export const GET_TWEETS_FAILED = 'tweets/GET_TWEETS_FAILED';

// Reducers
const initialState = {
	tweets: [],
	loading: false,
	error: null,
};

export default function tweetsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_TWEETS_REQUESTED:
			return {
				...state,
				loading: true,
			};
		case GET_TWEETS_SUCCESS:
			return {
				...state,
				loading: false,
				tweets: action.payload,
			};
		case GET_TWEETS_FAILED:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
}

// Actions
export function getTweets() {
	return {
		type: GET_TWEETS_REQUESTED,
	};
}
