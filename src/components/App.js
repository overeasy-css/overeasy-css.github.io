import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

require('overeasy/dist/overeasy.min.css');
require('../styles/App.scss');

import Sidebar from './Sidebar';

import Home from './Home';
import GettingStarted from './GettingStarted';
import Modules from './Modules';
import Base from './Base';
import Borders from './Borders';
import Colors from './Colors';
import Flex from './Flex';
import Grid from './Grid';
import Layout from './Layout';
import Lists from './Lists';
import Type from './Type';
import TypeDefaults from './TypeDefaults';
import Whitespace from './Whitespace';
import Configure from './Configure';

const App = () => {
	const sidebarItems = [
		{
			display_order: 1,
			title: 'Getting Started',
			url: '/getting-started',
		},
		{
			display_order: 2,
			title: 'Modules',
			url: '/modules',
		},
		{
			display_order: 3,
			title: 'Base',
			url: '/base',
			indent: true,
		},
		{
			display_order: 4,
			title: 'Borders',
			url: '/borders',
			indent: true,
		},
		{
			display_order: 5,
			title: 'Layout',
			url: '/layout',
			indent: true,
		},
		{
			display_order: 6,
			title: 'Type',
			url: '/type',
			indent: true,
		},
		{
			display_order: 7,
			title: 'Whitespace',
			url: '/whitespace',
			indent: true,
		},
		{
			display_order: 8,
			title: 'Flex',
			url: '/flex',
			indent: true,
		},
		{
			display_order: 9,
			title: 'Grid',
			url: '/grid',
			indent: true,
		},
		{
			display_order: 10,
			title: 'Lists',
			url: '/lists',
			indent: true,
		},
		{
			display_order: 11,
			title: 'Type-defaults',
			url: '/type-defaults',
			indent: true,
		},
		{
			display_order: 12,
			title: 'Colors',
			url: '/colors',
			indent: true,
		},
		{
			display_order: 13,
			title: 'Configure',
			url: '/configure',
		},
	];

	return (
		<Router>
			<div id="app" className="">
				<div className="bg-yellow flex">
					<div className="flex-auto flex">
						<Link 
							to="/"
							className="p1 blue-dark hover-green"
						>
							<h1 className="m0">OverEasy</h1>
						</Link>
					</div>
					<div className="flex">
						<a 
							href="https://github.com/overeasy-css/overeasy"
							target="_blank"
							rel="noreferrer noopener"
							className="flex flex-center p1 hover-yellow hover-bg-blue-dark"
						>
							GitHub
						</a>
					</div>
				</div>

				<div className="min-full-vh flex">
					<Sidebar items={sidebarItems} />
					<div className="overflow-hidden flex-auto">
						<Route exact path="/" component={Home} />
						<Route exact path="/getting-started" component={GettingStarted} />
						<Route exact path="/modules" component={Modules} />
						<Route exact path="/base" component={Base} />
						<Route exact path="/borders" component={Borders} />
						<Route exact path="/colors" component={Colors} />
						<Route exact path="/flex" component={Flex} />
						<Route exact path="/grid" component={Grid} />
						<Route exact path="/layout" component={Layout} />
						<Route exact path="/lists" component={Lists} />
						<Route exact path="/type" component={Type} />
						<Route exact path="/type-defaults" component={TypeDefaults} />
						<Route exact path="/whitespace" component={Whitespace} />
						<Route exact path="/configure" component={Configure} />
					</div>
				</div>

				<div className="p2 bg-yellow">
					Made by&nbsp; 
					<a 
						href="http://zachsaffrin.com"
						target="_blank"
						rel="noreferrer noopener"
						className="red-dark underline hover-green"
					>
						Zach Saffrin
					</a>
				</div>
			</div>
		</Router>
	);
};

export default App;
