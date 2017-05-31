import React from 'react';

require('../styles/PackageComparison.scss');

const Modules = () => {
	const Checkmark = (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ width: '16px' }}>
			<path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
		</svg>
	);

	return (
		<div id="modules" className="p2">
			
			<h2 className="my3">Modules</h2>

			<div className="my3">
				<p>OverEasy is a collection of modular CSS style utilities 
				which perform just one function at a time. This makes it 
				easy to mix and match classes to get your view together 
				quickly, regardless of whatever other view logic you have 
				in place.</p>
				<ul className="my1 pl2">
					<li>Base - Style reset and basic setup. Always include 
					this one!</li>
					<li>Whitespace - Margins and padding</li>
					<li>Layout - Content container, responsive states, 
					display modes, positioning</li>
					<li>Type - Alignment, decoration, sizes, wrapping</li>
					<li>Borders - Weights and rounding</li>
					<li>Flex - Flexbox parent and child utilities</li>
					<li>Grid - Responsive column grid with customizable 
					number of columns</li>
					<li>Type-defaults - Boilerplate typography setup</li>
					<li>Lists - Numbers and bullets</li>
					<li>Colors - Text, backgrounds, borders</li>
				</ul>
			</div>

			<div className="my3">
				<h3>Packages</h3>
				<p>OverEasy comes with several pre-compiled CSS packages to 
				help optimize your usage if there are some modules you don&apos;t 
				want to include, each with a pretty and a minified version.</p>
				<div className="my1 p1 bg-gray-lighter border border-gray monospace">
					/dist<br/>
					&nbsp;&nbsp;overeasy-bare.css<br/>
					&nbsp;&nbsp;overeasy-bare.min.css<br/>
					&nbsp;&nbsp;overeasy-basic.css<br/>
					&nbsp;&nbsp;overeasy-basic.min.css<br/>
					&nbsp;&nbsp;overeasy-plain.css<br/>
					&nbsp;&nbsp;overeasy-plain.min.css<br/>
					&nbsp;&nbsp;overeasy.css<br/>
					&nbsp;&nbsp;overeasy.min.css<br/>
				</div>
				<p>Here&apos;s a breakdown of which modules are included in each 
				package:</p>
				<table className="package-comparison">
					<thead>
						<tr>
							<td></td>
							<td className="bold center">Bare</td>
							<td className="bold center">Basic</td>
							<td className="bold center">Plain</td>
							<td className="bold center">Full</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th className="bold v-middle">Base</th>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
						</tr>
						<tr>
							<th className="bold v-middle">Borders</th>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
						</tr>
						<tr>
							<th className="bold v-middle">Layout</th>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
						</tr>
						<tr>
							<th className="bold v-middle">Type</th>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
						</tr>
						<tr>
							<th className="bold v-middle">Whitespace</th>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
						</tr>
						<tr>
							<th className="bold v-middle">Flex</th>
							<td></td>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
						</tr>
						<tr>
							<th className="bold v-middle">Grid</th>
							<td></td>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
						</tr>
						<tr>
							<th className="bold v-middle">Lists</th>
							<td></td>
							<td></td>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
						</tr>
						<tr>
							<th className="bold v-middle">Type-Defaults</th>
							<td></td>
							<td></td>
							<td>{Checkmark}</td>
							<td>{Checkmark}</td>
						</tr>
						<tr>
							<th className="bold v-middle">Colors</th>
							<td></td>
							<td></td>
							<td></td>
							<td>{Checkmark}</td>
						</tr>
					</tbody>
				</table>
			</div>

		</div>
	);
};

export default Modules;
