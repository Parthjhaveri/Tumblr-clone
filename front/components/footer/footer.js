import React from 'react';
// import '../styles/footer/footer.css';

const Footer = React.createClass({

	// THE RENDER FUNCTION
	render() {
		return(
			<div className="foot">
					<center>
						<p className="footerText">Home</p>
						<p className="footerText">About us</p>
						<p className="footerText">Contact</p>
					</center>
			</div>
		)
	}
});

export default Footer;