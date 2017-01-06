//Import REACT Modules
import React from 'react';
import { Link } from 'react-router';
import SiteNavigation from './navigation/SiteNavigation.js';

//Build Component
const Main = React.createClass({
	render() {
		return(
			<div>
				<h1>
					<Link to='/'>
						Tumblr Clone
					</Link>
				</h1>
				<SiteNavigation />
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
})

//Export Component
export default Main;