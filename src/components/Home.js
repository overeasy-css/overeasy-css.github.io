import React from 'react';

const Home = () => (
	<div id="home">
		<div className="pt4">
			<div className="center">
				<svg width={212} height={222} viewBox="0 0 212 222" style={{ height: '8rem', width: '8rem' }} className="" >
					<path fill="#FFF" stroke="#111" style={{ strokeWidth: 3 }} d="M200.122,107.185 c0,24.812,10.919,53.912-29.384,68.071C148.937,182.915,144.773,211,111.021,211c-33.504,0-76.352-5.488-70.404-38.914 c5.948-33.427-30.071-39.896-30.071-64.916c0-33.072,26.521-86.765,50.228-79.553C84.481,34.83,101.339,11,125.24,11 c31.503,0,24.845,33.849,44.55,39.148C189.496,55.449,200.122,80.486,200.122,107.185z"/>
					<circle fill="#FF8000" stroke="#7F8C8D" style={{ strokeWidth: 3 }} cx="121.493" cy="114.333" r={42} />
					<path fill="#FFBE1A" d="M137.384,80.859c2.257,2.594-15.224,4.989-28.963,16.939c-13.74,11.95-18.535,28.929-20.792,26.334 c-2.256-2.594-1.12-23.781,12.62-35.73S135.127,78.264,137.384,80.859z"/>
				</svg>
				<div className="size-huge strong">OverEasy</div>
				<div className="size-lg">
					A deliciously flexible OOCSS layout and style utility library
				</div>
			</div>
		</div>
		<div className="p4">
			<hr width="65%" />
		</div>
		<div className="p2">
			<div className="container">
				<div className="center size-lg bold mb3">
					OverEasy is a modular CSS toolkit for rapid and flexible development
				</div>
				<div className="clear">
					<div className="p2 md-col md-col-4 justify">
						<div className="bold mb1">Object Oriented</div>
						OverEasy is a library of atomic CSS style utilities 
						to mix and match however your view requires
					</div>
					<div className="p2 md-col md-col-4 justify">
						<div className="bold mb1">Immutable</div>
						Classes are based on their function, so they are 
						interchangable and independent of context
					</div>
					<div className="p2 md-col md-col-4 justify">
						<div className="bold mb1">Customizable</div>
						A variety of optimized builds are packaged by default, 
						with all source files and build scripts included 
						so you can tweak and adjust all you want.
					</div>
				</div>
				<div className="clear">
					<div className="p2 md-col md-col-4 justify">
						<div className="bold mb1">Lightweight</div>
						The default full package CSS is only 16 KB minimized, 
						with optimized packages clocking in even smaller.
					</div>
					<div className="p2 md-col md-col-4 justify">
						<div className="bold mb1">Intuitive</div>
						Classes are semantically named and titled relevant to 
						their function, so they are natural to compose.
					</div>
					<div className="p2 md-col md-col-4 justify">
						<div className="bold mb1">Responsive</div>
						Mobile-first grid orientation, size-responsive 
						utilities let you design views that adapt 
						seamlessly to any display size
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Home;
