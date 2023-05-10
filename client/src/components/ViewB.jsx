import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchViewBTweets } from '../redux/store';

const ViewB = ({ viewBTweets, fetchViewBTweets }) => {
	const username = 'elonmusk';
	const name = 'Tesla';

	useEffect(() => {
		fetchViewBTweets(username);
	}, [fetchViewBTweets]);

	return (
		<div>
			<h2>{`${name} Tweets`}</h2>
			{viewBTweets?.map((tweet) => (
				<div key={tweet.id_str || tweet.id}>
					<p>{tweet?.full_text}</p>
					<p>{tweet?.created_at}</p>
				</div>
			))}
			{!viewBTweets && <p>Loading...</p>}
		</div>
	);
};

ViewB.propTypes = {
	viewBTweets: PropTypes.array,
	fetchViewBTweets: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	viewBTweets: state.viewBTweets,
});

const mapDispatchToProps = {
	fetchViewBTweets,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewB);
