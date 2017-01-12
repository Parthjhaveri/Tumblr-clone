//Import REACT Modules
import React from 'react';
import { Link } from 'react-router';
import SiteNavigation from './navigation/SiteNavigation.js';
import '../styles/main/main.css';

//Build Component
const Main = React.createClass({
	render() {
		return(
			<div>
				<SiteNavigation />
<<<<<<< HEAD
				{React.cloneElement(this.props.children, this.props)}
=======
				{this.props.CreatePostContainer}
				{React.cloneElement(this.props.children, this.props, this.props.Home)}
>>>>>>> 2f802f6f6f2f05065eca5f950a7d4881b083131a
			</div>
		)
	}
})

//Export Component
export default Main;