
import React from 'react';
import { Link } from 'react-router-dom';

const Configure = () => (
	<div id="configure" className="p2">
		
		<h2 className="my3">Configure</h2>

		<div className="my3">
			<h3>Compile</h3>
			<p className="mb1">OverEasy is designed to be customized 
			and modified as needed. It is written in Sass (SCSS) and 
			compiled with Gulp so the CSS only contains the rule 
			sets you actually need for your project. Any time you 
			change anything in OverEasy, make sure you use Gulp to 
			recompile.</p>
			<p>To compile, open your terminal to the root folder of 
			wherever you have OverEasy installed and simply run:</p>
			<div className="my1 p1 bg-gray-lighter border border-gray monospace">
				gulp
			</div>
			<p className="mb1">OverEasy will recompile and produce new versions of 
			all the &nbsp;
			<Link to="/modules" className="red-dark underline hover-yellow-dark">packages</Link>
			&nbsp;in the &nbsp;
			<span className="bg-gray-lighter border border-gray monospace"> /dist </span>
			&nbsp;folder</p>
			<p>The gulpfile is broken down into individual compile tasks 
			for each individual module and package, so if you only want 
			to compile an individual piece of the framework, just check 
			out the gulpfile for the list of tasks.</p>
		</div>

		<div className="my3">
			<h3>Settings</h3>
			<p className="mb1">All opinionated style properties are abstracted as 
			variables and are located in the &nbsp;
			<span className="bg-gray-lighter border border-gray monospace"> /src/modules/_config </span>
			&nbsp;folder and organized by function. Variable names are semantic 
			so their use should be pretty intuitive.</p>
			<p className="mb1">The individual modules are located in &nbsp;
			<span className="bg-gray-lighter border border-gray monospace"> /src/modules </span>
			&nbsp;if you want to see which, if any, config files are applicable. 
			You can tinker with the modules themselves if you want to, although 
			if you're getting this deep into your config, you're probably better 
			off just omitting that module and adding your own custom 
			stylesheet to your project instead. OverEasy is atomic and modular 
			and is designed to play well with any other custom styles or 
			frameworks you employ.</p>
		</div>

	</div>
);

export default Configure;
