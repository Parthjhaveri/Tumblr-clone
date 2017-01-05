import React from 'react';
import '../../styles/navigation/site-footer.css';

const SiteFooter = React.createClass({
	render() {
		return(
			<div>
				<div className="footer-container">
					<div className="footer-about">
						ABOUT
					</div>
					<div className="footer-apps">
						APPS
					</div>
					<div className="footer-legal">
						LEGAL
					</div>
					<div className="footer-privacy">
						PRIVACY
					</div>
					<div className="footer-keyboard-icon">
						KEYBOARD ICON
					</div>
				</div>
			</div>
		)
	}
});

export default SiteFooter;