import React from 'react';

const Borders = () => (
	<div id="borders" className="p2">
		
		<h2 className="my3">Borders</h2>

		<div className="my3">
			<h3>Border types</h3>
			<div className="p1 flex flex-wrap">
				<div className="m1 flex-grow bold center p1 border">.border</div>
				<div className="m1 flex-grow bold center p1 border-heavy">.border-heavy</div>
			</div>
			<div className="p1 flex flex-wrap">
				<div className="m1 flex-grow bold center p1 border-left">.border-left</div>
				<div className="m1 flex-grow bold center p1 border-top">.border-top</div>
				<div className="m1 flex-grow bold center p1 border-right">.border-right</div>
				<div className="m1 flex-grow bold center p1 border-bottom">.border-bottom</div>
			</div>
			<div className="p1 flex flex-wrap">
				<div className="m1 flex-grow bold center p1 border-heavy-left">.border-heavy-left</div>
				<div className="m1 flex-grow bold center p1 border-heavy-top">.border-heavy-top</div>
				<div className="m1 flex-grow bold center p1 border-heavy-right">.border-heavy-right</div>
				<div className="m1 flex-grow bold center p1 border-heavy-bottom">.border-heavy-bottom</div>
			</div>
		</div>

		<div className="my3">
			<h3>Border radius</h3>
			<div className="p1 flex flex-wrap">
				<div className="m1 flex-grow bold center p1 border rounded">.rounded</div>
				<div className="m1 flex-grow bold center p1 border rounder">.rounder</div>
				<div className="m1 flex-grow bold center p1 border round">.round</div>
				<div className="m1 flex-grow bold center p1 border unrounded">.unrounded</div>
			</div>
		</div>

	</div>
);

export default Borders;
