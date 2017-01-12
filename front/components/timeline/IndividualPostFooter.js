import React from 'react';

const IndividualPostFooter = React.createClass({
	render() {
		return(
			<div>
				<div className="footer-container">
					<div className="footer-left">
						1,275 notes
					</div>		
					<div className="footer-right">
						<img src="https://s25.postimg.org/v73bn3b33/tumblr_header_icon_heart.png" alt="Like This Photo!" />
					</div>
				</div>		
			</div>
		)
	}
});

export default IndividualPostFooter;