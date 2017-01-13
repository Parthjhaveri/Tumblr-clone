import React from 'react';
import $ from 'jquery';
import IndividualPost from './IndividualPost';
import '../../styles/timeline/timeline.css';
import {displayPosts} from 'postActions';

const Timeline = React.createClass({
// on componentDidMount we need to fetch time line with posts from all the users you follow
	componentDidMount() {
		console.log('Timeline mounted.')
		$.ajax({
			url: '/api/post/',
			type: 'GET',
		})
		.done(function(posts) {
			console.log(posts);
			displayPosts(posts);
		})
	},
  
	render() {
		console.log('PROPS:', this.props.posts);
		return(
			<div>
				<div className="timeline-container">
				{this.props.posts ? this.props.posts.map(function(val, idx) {
					return (
						<div key={idx} className="timeline-post-container">
							<IndividualPost userId={val.UserId} 
															id={val.id} 
															title={val.title} 
															content={val.content} />
						</div>
					)
				}) : null}	
				</div>
			</div>
		)
	}
});

export default Timeline;