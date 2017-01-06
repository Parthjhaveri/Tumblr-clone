import React from 'react';
import '../../styles/navigation/site-navigation.css';

const SiteNavigation = React.createClass({
	render() {
		return(
			<div>
				<div className="navigation-container">
					<div className="navigation-left">
						<div className="navigation-tumblr-logo">
							TUMBLR LOGO
						</div>
						<div className="navigation-search">
							SEARCH BAR
						</div>
					</div>
					<div className="navigation-right">
						<div className="navigation-button-timeline">
							TIMELINE BUTTON
						</div>
						<div className="navigation-button-user-profile">
							USER PROFILE BUTTON
						</div>
						<div className="navigation-button-create-post">
							CREATE POST BUTTON
						</div>
					</div>
				</div>
			</div>
		)
	}
});

export default SiteNavigation;