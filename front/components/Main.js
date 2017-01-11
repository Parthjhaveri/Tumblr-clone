//Import REACT Modules
import React from 'react';
import { Link } from 'react-router';
import SiteNavigation from './navigation/SiteNavigation.js';
import CreatePost from './create-post/Create-Post.js';

//Build Component
const Main = React.createClass({
	render() {
		return(
			<div>
				<SiteNavigation />
				<CreatePost />
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
})

//Export Component
export default Main;