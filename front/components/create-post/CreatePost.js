import React from 'react';
import {actionTest} from 'actionTest';
import '../../styles/create-post/create-post.css';

const CreatePost = React.createClass({

	componentDidMount() {
		console.log('Mount: ' + this.props.color);
	},

	handleSubmit(event) {
		let that = this;
		event.preventDefault();
		actionTest('blue');
		setTimeout( function () {
			console.log('Handle submit: ' + that.props.color);
		}, 2000)
	},

	render() {
		return(
			<div>
				<div className="create-post-container">
					<div className="create-post-input-container">
						<div className="create-post-input-header">
							<div className="create-post-input-header-userid">
								ItsMelBaby1969
							</div>
							<div className="create-post-input-header-settings">
								SETTINGS
							</div>
						</div>
						<div className="create-post-input-title">
							<input type="text" name="title" placeholder="Title"></input>
						</div>
						<div className="create-post-input-text">
							<textarea type="text" name="text" placeholder="Your text here" rows="6" cols="50"></textarea>
						</div>		
						<div className="create-post-input-tags">
							<input type="text" name="tags" placeholder="#tags"></input>
						</div>
						<div className="create-post-input-footer">
							<div className="create-post-input-footer-close">
								
							</div>
							<div className="create-post-input-footer-post">
								<button>POST</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	},
});

export default CreatePost;