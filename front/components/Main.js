//Import REACT Modules
import React from 'react';
import { Link } from 'react-router';
import SiteNavigation from './navigation/SiteNavigation.js';
import '../styles/main/main.css';
import Login from 'Login';

//Build Component
const Main = React.createClass({
	render() {
		return(
			<div>
				<SiteNavigation />
					{React.cloneElement(this.props.children, this.props, this.props.Home)}
			</div>
		)
	}
})

//Export Component
export default Main;