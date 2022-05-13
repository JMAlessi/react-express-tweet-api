/* Ducks architecture
tweets.js */

// Types
export const GET_TWEETS_REQUESTED = 'GET_TWEETS_REQUESTED';
export const GET_TWEETS_SUCCESS = 'GET_TWEETS_SUCCESS';
export const GET_TWEETS_FAILED = 'GET_TWEETS_FAILED';

// Reducers
const initialState = {
    tweets: [],
    loading: false,
    error: null,
};

export default function tweets(state = initialState, action) {
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
                tweets: action.tweets,
            };
        case GET_TWEETS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            };
        default:
            return state;
    };
};

// Actions
export function getTweets(tweets) {
    return {
        type: GET_TWEETS_REQUESTED,
        payload: tweets,
    };
}