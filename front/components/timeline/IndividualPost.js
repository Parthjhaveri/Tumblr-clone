import React from 'react';
import '../../styles/timeline/timeline.css';
import IndividualPostHeader from './IndividualPostHeader';
import IndividualPostFooter from './IndividualPostFooter';

const IndividualPost = React.createClass({
	render() {
		return(
			<div>
				<div className="post-container">
					<div className="post-left-container">
						<div className="post-left-photo">
							<img src="https://s25.postimg.org/3rzssjsgv/melanie_user_photo.png" alt="Melanie" />
						</div>
					</div>
					<div className="post-right-container">
						<div className="post-right-header">
							<IndividualPostHeader />
						</div>
						<div className="post-right-content">
							<img src="https://derpicdn.net/img/view/2013/5/9/320959__solo_pinkie+pie_animated_questionable_solo+female_plot_upvotes+galore_dance_artist-colon-lizombie_twerking.gif" alt="Twerk Pony" /> 
						</div>
						<div className="post-right-footer">
							<IndividualPostFooter />
						</div>
					</div>
				</div>
			</div>
		)
	}
});

export default IndividualPost;