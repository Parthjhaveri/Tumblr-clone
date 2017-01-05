import React from 'react';
import '../styles/navigation/site-navigation.scss';

const SiteNavigation = React.createClass({
	render() {
		return(
			<div>
				<div className="navigation-container">
					<div className="navigation-left">
						<div className="navigation-tumblr-logo">
							
						</div>
						<div className="navigation-search">
							
						</div>
					</div>
					<div className="naviagtion-right">
						<div className="navigation-button-timeline">
							
						</div>
						<div className="navigation-button-user-profile">
							
						</div>
						<div className="navigation-button-create-post">
							
						</div>
					</div>
				</div>
			</div>
		)
	}
});

export default SiteNavigation;