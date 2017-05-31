import React from 'react';

const Type = () => (
	<div id="type" className="p2">
		
		<h2 className="my3">Type</h2>
		<p>This module provides utilities for styling 
		text and fonts</p>

		<div className="my3">
			<div className="lg-col lg-col-6">
				<div className="m1">
					<h3>Text decoration</h3>
				</div>

				<div className="m1 p1 border border-gray">
					<div className="italic">.italic</div>
					<div className="underline">.underline</div>
					<div className="caps">.caps</div>
				</div>
			</div>
			<div className="lg-col lg-col-6">
				<div className="m1">
					<h3>Alignment</h3>
				</div>

				<div className="m1 p1 border border-gray">
					<div className="left">.left</div>
					<div className="center">.center</div>
					<div className="right">.right</div>
					<div className="v-middle">.v-middle</div>
				</div>
			</div>
			<div className="lg-col lg-col-6">
				<div className="m1">
					<h3>Sizes</h3>
				</div>

				<div className="m1 p1 border border-gray">
					<div className="size-xs">.size-xs</div>
					<div className="size-sm">.size-sm</div>
					<div>Normal</div>
					<div className="size-lg">.size-lg</div>
					<div className="size-xl">.size-xl</div>
					<div className="size-xxl">.size-xxl</div>
				</div>
			</div>
			<div className="lg-col lg-col-6">
				<div className="m1">
					<h3>Wrapping</h3>
				</div>

				<div className="m1 p1 border border-gray">
					<div className="nowrap">
						Using
						<span className="mx1 px1 bg-gray-lighter border border-gray monospace">.nowrap</span>
						will prevent the line from wrapping
					</div>
					<div className="break-word">
						<span className="bg-gray-lighter border border-gray monospace nowrap">.break-word</span>
						willallowbreakinglongwordsifyouusealotoflongwordswithnospaces
					</div>
					<div className="justify">
						Because this text block uses
						<span className="mx1 px1 bg-gray-lighter border border-gray monospace">.justify</span>
						, when the line breaks the spacing will justify to fill the lines.
					</div>
					<div className="truncate">
						Using
						<span className="mx1 px1 bg-gray-lighter border border-gray monospace">.truncate</span>
						will use an ellipsis to indicate when there is too much text for the line
					</div>
				</div>
			</div>
		</div>

	</div>
);

export default Type;
