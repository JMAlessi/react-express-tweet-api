import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTweets } from '../redux/ducks/tweets';

const TweetFeed = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTweets());
	}, [dispatch]);

	const tweets = useSelector((state) => state.tweets.tweets);

	let tweetData = null;

	if (
		tweets &&
		tweets.data &&
		tweets.data[0] &&
		tweets.includes &&
		tweets.includes.users &&
		tweets.includes.users[0]
	) {
		tweetData = {
			id: tweets.data[0].id,
			text: tweets.data[0].text,
			username: `@${tweets.includes.users[0].username}`,
		};
	}

	return (
		<div className="card my-4">
			<div className="card-body">
				<h5 className="card-title">{tweetData?.text}</h5>
				<h6 className="card-subtitle mb-2 text-muted">{tweetData?.username}</h6>
				{tweetData && (
					<a
						className="btn btn-primary mt-3"
						href={`https://twitter.com/${tweetData.username}/status/${tweetData.id}`}
					>
						<i className="fab fa-twitter"></i> Go to Tweet!
					</a>
				)}
			</div>
		</div>
	);
};

export default TweetFeed;
