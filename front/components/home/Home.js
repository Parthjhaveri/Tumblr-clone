import React from 'react';
import Timeline from '../timeline/Timeline.js';
import Sidebar from '../sidebar/Sidebar.js';
import '../../styles/home/home.css';

const Home = React.createClass({
	render() {
		return(
			<div>
				<div className="home-container">
					<div className="timeline-container">
						<Timeline />
					</div>
					<div className="sidebar-container">
						<Sidebar />
					</div>
				</div>
			</div>
		)
	}
});

export default Home;