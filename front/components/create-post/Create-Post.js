import React from 'react';

const CreatePost = React.createClass({
	render() {
		return(
			<div>
				<br />
				<input type="text" placeholder="TITLE"></input>
				<br />
				<input type="text" placeholder="USERNAME"></input>
				<br />
				<input type="text" placeholder="POST TEXT"></input>
				<br />
				<input type="text" placeholder="TAGS (separate with ',')"></input>
				<br />
				<button type="submit">POST</button>
				<br />
			</div>
		)
	}
});

export default CreatePost;