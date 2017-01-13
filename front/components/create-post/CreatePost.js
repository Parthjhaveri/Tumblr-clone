import React from 'react';
import $ from 'jquery';
import {actionTest} from 'actionTest';
import {createNewPost} from 'formActions';
import '../../styles/create-post/create-post.css';

const CreatePost = React.createClass({

	componentDidMount() {
		console.log('Mount: ' + this.props.color);
	},


	handleSubmit(event) {
		event.preventDefault();
		$.ajax({
			url: '/api/post/',
			type: 'POST',
			data: {
				title: this.props.title,
				content: this.props.text,
				username: this.props.username,
				tags: this.props.tags
			}
		})
		.done(console.log('Done'))
	},

	handleChange(event) {
		console.log(event.target.value);
		let name = event.target.name;
		let value = event.target.value;
		createNewPost(name, value);

	},

	render() {
		console.log('TITLE:', this.props.title)
		console.log('TEXT:', this.props.text)
		console.log('TAGS:', this.props.username)
		return(
			<div>
				<div className="create-post-container">
					<form onSubmit={this.handleSubmit}>

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
										<input type="text" name="title" placeholder="Title" onChange={this.handleChange}></input>
									</div>
									
									<div className="create-post-input-text">
										<textarea type="text" name="text" placeholder="Your text here" rows="6" cols="50" onChange={this.handleChange}></textarea>
									</div>		
									
									<div className="create-post-input-tags">
										<input type="text" name="tags" placeholder="#tags" onChange={this.handleChange}></input>
									</div>
								
									<div className="create-post-input-footer">
										<div className="create-post-input-footer-close">
									</div>
									
									<div className="create-post-input-footer-post">
										<input type="submit" name="submit" value="Post" />
									</div>	
								</div>
						</div>
					
					</form>
				</div>
			</div>
		)
	},
});

export default CreatePost;