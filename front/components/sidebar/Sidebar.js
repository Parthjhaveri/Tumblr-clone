import React from 'react';
import RecommendBlogs from './RecommendBlogs';
import BlogRadar from './BlogRadar';
import '../../styles/sidebar/site-sidebar.css';

const Sidebar = React.createClass({
	render() {
		return(
			<div>
				<div className="sidebar-container">
					<div className="sidebar-recommend-blogs-container">
						<RecommendBlogs />
					</div>
					<div className="sidebar-blogradar-container">
						<BlogRadar />
					</div>
				</div>
			</div>
		)
	}
});

export default Sidebar;