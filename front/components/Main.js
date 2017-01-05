//Import REACT Modules
import React from 'react';
import { Link } from 'react-router';

//Build Component
const Main = React.createClass({
	render() {
		return(
			<div>
				<h1>
					<Link to='/'>
						Twitter Clone
					</Link>
				</h1>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
})

//Export Component
export default Main;