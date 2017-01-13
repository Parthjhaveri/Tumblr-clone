import React from 'react';
import Timeline from '../timeline/Timeline.js';
import Sidebar from '../sidebar/Sidebar.js';
import '../../styles/home/home.css';

import Footer from '../footer/footer.js';
import '../../styles/footer/footer.css';

const Home = React.createClass({
	render() {
		return(
			<div>
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
					<Footer />
			</div>
		)
	}
});

export default Home;