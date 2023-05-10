import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink
						to="/view-a"
						activeClassName="active"
					>
						View A
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/view-b"
						activeClassName="active"
					>
						View B
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavigationBar;
