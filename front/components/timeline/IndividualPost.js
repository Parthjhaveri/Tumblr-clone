import React from 'react';
import '../../styles/timeline/timeline.css';

const IndividualPost = React.createClass({
	render() {
		return(
			<div>
				<div className="post-container">
					<div className="post-left-container">
						<div className="post-left-photo">
							USER IMAGE
						</div>
					</div>
					<div className="post-right-container">
						<div className="post-right-header">
							POST HEADER
						</div>
						<div className="post-right-content">
							POST CONTENT 
						</div>
						<div className="post-right-footer">
							POST FOOTER 
						</div>
					</div>
				</div>
			</div>
		)
	}
});

export default IndividualPost;