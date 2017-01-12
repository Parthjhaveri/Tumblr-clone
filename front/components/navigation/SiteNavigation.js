import React from 'react';
import { Link } from 'react-router';
import '../../styles/navigation/site-navigation.css';

const SiteNavigation = React.createClass({
	render() {
		return(
			<div>
				<div className="navigation-container">
					<div className="navigation-left">
						<div className="navigation-tumblr-logo">
							<img src="https://s25.postimg.org/tqvcbdm5b/tumblr_logo.png" alt="Tumblr" />
						</div>
						<div className="navigation-search">
							<input type="text" placeholder="         Search Tumblr"></input>
						</div>
					</div>
					<div className="navigation-right">
						<Link to="/">
							<div className="navigation-button-timeline">
								<img src="https://s25.postimg.org/gt1qdb8in/tumblr_home.png" alt="Timeline" />
							</div>
						</Link>
						<div className="navigation-button-user-profile">
							<img src="https://s25.postimg.org/8xr6yhyvz/tumblr_user.png" alt="User Profile" />
						</div>
						<Link to="/create">
							<div className="navigation-button-create-post">
								<img src="https://s25.postimg.org/j59qawl3z/tumblr_create.png" alt="Create Post" />
							</div>
						</Link>
					</div>
					</div>
					<div className="navigation-divider">
				</div>
			</div>
		)
	}
});

export default SiteNavigation;