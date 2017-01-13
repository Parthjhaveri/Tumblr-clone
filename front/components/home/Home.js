import React from 'react';
import Timeline from '../timeline/Timeline.js';
import Sidebar from '../sidebar/Sidebar.js';
import '../../styles/home/home.css';
import {TimelineContainer} from 'TimelineContainer';

import Footer from '../footer/footer.js';
import '../../styles/footer/footer.css';

const Home = React.createClass({
	render() {
		return(
			<div>
				<div className="home-container">
					<div className="timeline-container">
						<TimelineContainer />
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