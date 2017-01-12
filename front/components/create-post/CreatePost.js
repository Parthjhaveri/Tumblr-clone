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
						<h1>
							CREATE POST
						</h1>
					</div>
				</div>
			</div>
		)
	},
});

export default CreatePost;