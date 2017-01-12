import React from 'react';

const IndividualPostHeader = React.createClass({
	render() {
		return(
			<div>
				<div className="individual-post-header-container">
					<div className="individual-post-header-left">
						Here's a blog: <span className="individual-post-header-bold-font">ItsMelBaby69</span>
					</div>
					<div className="individual-post-header-right">
						<div className="individual-post-header-delete">
							<img src="https://s25.postimg.org/ykou84fdr/tumblr_header_icon_x.png" alt="X" />
						</div>
						<div className="individual-post-header-navigator">
							<img src="https://s25.postimg.org/5ts0i29jz/tumblr_header_icon_navigation.png" alt="Navigator" />
						</div>
					</div>
				</div>
			</div>
		)
	}
});

export default IndividualPostHeader;