import React from 'react';
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
						<div className="navigation-button-timeline">
							<img src="https://s25.postimg.org/gt1qdb8in/tumblr_home.png" alt="Timeline" />
						</div>
						<div className="navigation-button-user-profile">
							<img src="https://s25.postimg.org/8xr6yhyvz/tumblr_user.png" alt="User Profile" />
						</div>
						<div className="navigation-button-create-post">
							<img src="https://s25.postimg.org/j59qawl3z/tumblr_create.png" alt="Create Post" />
						</div>
					</div>
					</div>
					<div className="navigation-divider">
				</div>
			</div>
		)
	}
});

export default SiteNavigation;