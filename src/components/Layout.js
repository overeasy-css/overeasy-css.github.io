import React from 'react';

const Layout = () => (
	<div id="borders" className="p2">
		
		<h2 className="my3">Layout</h2>

		<div className="my3">
			<div className="container">
				<h3>Content container</h3>
				<p>This is an optional wrapper to limit the width of 
				your content to the width of the largest breakpoint 
				to help keep things readable on large displays. The 
				content of this section is wrapped in a container, if 
				you want to see how it works.</p>

				<div className="my1 p1 bg-gray-lighter border border-gray monospace">
					&lt;div class=&quot;container&quot;&gt;<br/>
					&nbsp;&nbsp;&lt;...<br/>
					&lt;/div&gt;
				</div>
			</div>
		</div>

		<div className="my3">
			<h3>Responsive display</h3>
			<p>Show or hide whole elements at various breakpoints. 
			This is mobile-first, just like the column grid, so the 
			utilities apply at their corresponding breakpoints and 
			up. Resize your browser to see this working.</p>

			<div className="my1">
				<div className="my1 p1 sm-show bg-blue-dark white">
					This will show only above the Small breakpoint
				</div>
				<div className="my1 p1 md-show bg-blue-dark white">
					This will show only above the Medium breakpoint
				</div>
				<div className="my1 p1 lg-show bg-blue-dark white">
					This will show only above the Large breakpoint
				</div>
				<div className="my1 p1 sm-hide bg-blue-light white right">
					This will be hidden above the Small breakpoint
				</div>
				<div className="my1 p1 md-hide bg-blue-light white right">
					This will be hidden above the Medium breakpoint
				</div>
				<div className="my1 p1 lg-hide bg-blue-light white right">
					This will be hidden above the Large breakpoint
				</div>
			</div>
			<div className="my1 p1 bg-gray-lighter border border-gray monospace">
				&lt;div class=&quot;sm-show&quot;&gt;
					This will show only above the Small breakpoint
				&lt;/div&gt;<br/>
				&lt;div class=&quot;md-show&quot;&gt;
					This will show only above the Medium breakpoint
				&lt;/div&gt;<br/>
				&lt;div class=&quot;lg-show&quot;&gt;
					This will show only above the Large breakpoint
				&lt;/div&gt;<br/>
				<br/>
				&lt;div class=&quot;sm-hide&quot;&gt;
					This will be hidden above the Small breakpoint
				&lt;/div&gt;<br/>
				&lt;div class=&quot;md-hide&quot;&gt;
					This will be hidden above the Medium breakpoint
				&lt;/div&gt;<br/>
				&lt;div class=&quot;lg-hide&quot;&gt;
					This will be hidden above the Large breakpoint
				&lt;/div&gt;<br/>
			</div>
		</div>

		<div className="my3">
			<h3>Shorthand utilities</h3>
			<p>Atomic CSS definitions defined as classes to use 
			inline as needed</p>

			<div className="clear">
				<div className="lg-col lg-col-6 p1">
					<h4>Display modes</h4>
					<div className="my1 p1 bg-gray-lighter border border-gray monospace">
						.inline {`{`} display: inline {`}`}<br/>
						.block {`{`} display: block {`}`}<br/>
						.inline-block {`{`} display: inline-block {`}`}<br/>
						.display-none {`{`} display: none !important {`}`}<br/>
						.hide {`{`}<br/>
						&nbsp;&nbsp;position: absolute !important;<br/>
						&nbsp;&nbsp;height: 1px;<br/>
						&nbsp;&nbsp;width: 1px;<br/>
						&nbsp;&nbsp;overflow: hidden;<br/>
						&nbsp;&nbsp;clip: rect(1px, 1px, 1px, 1px);<br/>
						{`}`}
					</div>
				</div>
				<div className="lg-col lg-col-6 p1">
					<h4>Overflow</h4>
					<div className="my1 p1 bg-gray-lighter border border-gray monospace">
						.overflow-hidden {`{`} overflow: hidden {`}`}<br/>
						.overflow-scroll {`{`} overflow: scroll {`}`}<br/>
						.overflow-auto   {`{`} overflow: auto {`}`}<br/>
						<br/>
						.overflow-x-hidden {`{`} overflow-x: hidden {`}`}<br/>
						.overflow-x-scroll {`{`} overflow-x: scroll {`}`}<br/>
						.overflow-x-auto   {`{`} overflow-x: auto {`}`}<br/>
						<br/>
						.overflow-y-hidden {`{`} overflow-y: hidden {`}`}<br/>
						.overflow-y-scroll {`{`} overflow-y: scroll {`}`}<br/>
						.overflow-y-auto {`{`} overflow-y: auto {`}`}
					</div>
				</div>
				<div className="lg-col lg-col-6 p1">
					<h4>Position</h4>
					<div className="my1 p1 bg-gray-lighter border border-gray monospace">
						.relative {`{`} position: relative {`}`}<br/>
						.absolute {`{`} position: absolute {`}`}<br/>
						.fixed {`{`} position: fixed {`}`}<br/>
						<br/>
						.top-0 {`{`} top: 0 {`}`}<br/>
						.right-0 {`{`} right: 0 {`}`}<br/>
						.bottom-0 {`{`} bottom: 0 {`}`}<br/>
						.left-0 {`{`} left: 0 {`}`}
					</div>
				</div>
				<div className="lg-col lg-col-6 p1">
					<h4>Sizing</h4>
					<div className="my1 p1 bg-gray-lighter border border-gray monospace">
						.full-width {`{`} width: 100% {`}`}<br/>
						.half-width {`{`} width: 50% {`}`}<br/>
						<br/>
						.full-height {`{`} height: 100% {`}`}<br/>
						.half-height {`{`} height: 50% {`}`}<br/>
						<br/>
						.full-vw {`{`} width: 100vw {`}`}<br/>
						.half-vw {`{`} width: 50vw {`}`}<br/>
						<br/>
						.full-vh {`{`} height: 100vh {`}`}<br/>
						.half-vh {`{`} height: 50vh {`}`}<br/>
						<br/>
						.min-full-height {`{`} min-height: 100% {`}`}<br/>
						.min-full-vh {`{`} min-height: 100vh {`}`}
					</div>
				</div>
			</div>
		</div>

	</div>
);

export default Layout;
