import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchViewATweets } from '../redux/store';

const ViewA = ({ viewATweets, fetchViewATweets }) => {
	const username = 'elonmusk';
	const name = 'Elon Musk';

	useEffect(() => {
		fetchViewATweets(username);
	}, [fetchViewATweets]);

	return (
		<div>
			<h2>{`${name} Tweets`}</h2>
			{viewATweets?.map((tweet) => (
				<div key={tweet.id_str || tweet.id}>
					<p>{tweet?.full_text || tweet?.text}</p>
					<p>{tweet?.created_at}</p>
				</div>
			))}
			{!viewATweets && <p>Loading...</p>}
		</div>
	);
};

ViewA.propTypes = {
	viewATweets: PropTypes.array,
	fetchViewATweets: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	viewATweets: state.viewATweets,
});

const mapDispatchToProps = {
	fetchViewATweets,
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewA);
