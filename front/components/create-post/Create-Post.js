import React from 'react';
import {actionTest} from 'actionTest';

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
				<div>{this.props.color}</div>
				<form onSubmit={this.handleSubmit}>
					<br />
					<input type="text" name="title" placeholder="TITLE"/>
					<br />
					<input type="text" name="postText" placeholder="POST TEXT"/>
					<br />
					<input type="text" name="tags" placeholder="TAGS"/>
					<br />
					<input type="submit" value="submit"/>
					<br />
				</form>
			</div>
		)
	}
});

export default CreatePost;