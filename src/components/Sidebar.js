import React from 'react';
import { Link } from 'react-router-dom';

require('../styles/Sidebar.scss');

const SidebarItem = (props) => (
	<div className="sidebar-item">
		<Link 
			to={props.url}
			className={'block pr2 py1 hover-green-light ' + (props.indent ? 'pl3' : 'pl2')}
		>
			{props.title}
		</Link>
	</div>
);

const Sidebar = (props) => (
	<div className="sidebar bg-gray-lighter border-right border-yellow blue-dark">
		{ props.items.map((item) => <SidebarItem title={item.title} url={item.url} key={item.display_order} indent={item.indent || false} />) }
	</div>
);

export default Sidebar;
