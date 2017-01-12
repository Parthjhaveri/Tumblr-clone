import React from 'react';
import IndividualPost from './IndividualPost';
import '../../styles/timeline/timeline.css';

const Timeline = React.createClass({
// on componentDidMount we need to fetch time line with posts from all the users you follow
	render() {
		return(
			<div>
				<div className="timeline-container">
					
					<div className="timeline-post-container">
						<IndividualPost />
						<IndividualPost />
						<IndividualPost />
					</div>

				</div>
			</div>
		)
	}
});

export default Timeline;