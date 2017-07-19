
import React from 'react';

const Whitespace = () => (
	<div id="whitespace" className="p2">

		<h2 className="my3">Whitespace</h2>

		<div className="my3">
			<h3>Margins and Padding</h3>
			<p>Quick utilities for controlling your
			margins and padding on the fly</p>

			<div className="my1 clear">
				<div className="md-col md-col-6">
					<div className="m1">
						<h4>Margins</h4>
					</div>
					<div className="m1 border border-gray">
						<div className="bg-blue-dark white center">.m0</div>
					</div>
					<div className="m1 border border-gray">
						<div className="m1 bg-blue-dark white center">.m1</div>
					</div>
					<div className="m1 border border-gray">
						<div className="m2 bg-blue-dark white center">.m2</div>
					</div>
					<div className="m1 border border-gray">
						<div className="m3 bg-blue-dark white center">.m3</div>
					</div>
					<div className="m1 border border-gray">
						<div className="m4 bg-blue-dark white center">.m4</div>
					</div>
					<div className="m1 p1 bg-gray-lighter border border-gray monospace">
					&lt;div class=&quot;m0&quot;&gt;.m0&lt;/div&gt;&nbsp;&nbsp;
					<span className="gray-dark">// Default behavior</span><br/>
					&lt;div class=&quot;m1&quot;&gt;.m1&lt;/div&gt;<br/>
					&lt;div class=&quot;m2&quot;&gt;.m2&lt;/div&gt;<br/>
					&lt;div class=&quot;m3&quot;&gt;.m3&lt;/div&gt;<br/>
					&lt;div class=&quot;m4&quot;&gt;.m4&lt;/div&gt;<br/>
					</div>
				</div>
				<div className="md-col md-col-6">
					<div className="m1">
						<h4>Padding</h4>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block bg-blue-dark white center">.p0</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block p1 bg-blue-dark white center">.p1</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block p2 bg-blue-dark white center">.p2</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block p3 bg-blue-dark white center">.p3</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block p4 bg-blue-dark white center">.p4</div>
					</div>
					<div className="m1 p1 bg-gray-lighter border border-gray monospace">
					&lt;div class=&quot;p0&quot;&gt;.p0&lt;/div&gt;&nbsp;&nbsp;
					<span className="gray-dark">// Default behavior</span><br/>
					&lt;div class=&quot;p1&quot;&gt;.p1&lt;/div&gt;<br/>
					&lt;div class=&quot;p2&quot;&gt;.p2&lt;/div&gt;<br/>
					&lt;div class=&quot;p3&quot;&gt;.p3&lt;/div&gt;<br/>
					&lt;div class=&quot;p4&quot;&gt;.p4&lt;/div&gt;<br/>
					</div>
				</div>
			</div>

		</div>

		<div className="my3">
			<h3>Opposite-side Utilities</h3>
			<p>If you only need to target horizontal or vertical
			whitespace, the X and Y utilities refer to the X-axis
			(left and right) and Y-axis (top and bottom)</p>

			<div className="my1 clear">
				<div className="md-col md-col-6">
					<div className="m1">
						<h4>Margins</h4>
					</div>
					<div className="m1 border border-gray">
						<div className="mx1 bg-blue-dark white center">.mx1</div>
					</div>
					<div className="m1 border border-gray">
						<div className="mx2 bg-blue-dark white center">.mx2</div>
					</div>
					<div className="m1 border border-gray">
						<div className="mx3 bg-blue-dark white center">.mx3</div>
					</div>
					<div className="m1 mb3 border border-gray">
						<div className="mx4 bg-blue-dark white center">.mx4</div>
					</div>
					<div className="m1 border border-gray">
						<div className="my1 bg-blue-dark white center">.my1</div>
					</div>
					<div className="m1 border border-gray">
						<div className="my2 bg-blue-dark white center">.my2</div>
					</div>
					<div className="m1 border border-gray">
						<div className="my3 bg-blue-dark white center">.my3</div>
					</div>
					<div className="m1 border border-gray">
						<div className="my4 bg-blue-dark white center">.my4</div>
					</div>
				</div>
				<div className="md-col md-col-6">
					<div className="m1">
						<h4>Padding</h4>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block px1 bg-blue-dark white center">.px1</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block px2 bg-blue-dark white center">.px2</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block px3 bg-blue-dark white center">.px3</div>
					</div>
					<div className="m1 mb3 border border-gray flex flex-justify-center">
						<div className="inline-block px4 bg-blue-dark white center">.px4</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block py1 bg-blue-dark white center">.py1</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block py2 bg-blue-dark white center">.py2</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block py3 bg-blue-dark white center">.py3</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block py4 bg-blue-dark white center">.py4</div>
					</div>
				</div>
			</div>

		</div>

		<div className="my3">
			<h3>Single-side Utilities</h3>
			<p className="mb2">Then if you need to target individual sides, there are utilities for that too.</p>
			<p>t = Top, r = Right, b = Bottom, l = Left</p>

			<div className="my1 clear">
				<div className="md-col md-col-6">
					<div className="m1">
						<h4>Margins</h4>
					</div>
					<div className="m1 border border-gray">
						<div className="mt1 bg-blue-dark white center">.mt1</div>
					</div>
					<div className="m1 border border-gray">
						<div className="mt2 bg-blue-dark white center">.mt2</div>
					</div>
					<div className="m1 border border-gray">
						<div className="mt3 bg-blue-dark white center">.mt3</div>
					</div>
					<div className="m1 mb3 border border-gray">
						<div className="mt4 bg-blue-dark white center">.mt4</div>
					</div>
					<div className="m1 border border-gray">
						<div className="mr1 bg-blue-dark white center">.mr1</div>
					</div>
					<div className="m1 border border-gray">
						<div className="mr2 bg-blue-dark white center">.mr2</div>
					</div>
					<div className="m1 border border-gray">
						<div className="mr3 bg-blue-dark white center">.mr3</div>
					</div>
					<div className="m1 border border-gray">
						<div className="mr4 bg-blue-dark white center">.mr4</div>
					</div>
					<div className="m1 border border-gray">
						<div className="mb1 bg-blue-dark white center">.mb1</div>
					</div>
					<div className="m1 border border-gray">
						<div className="mb2 bg-blue-dark white center">.mb2</div>
					</div>
					<div className="m1 border border-gray">
						<div className="mb3 bg-blue-dark white center">.mb3</div>
					</div>
					<div className="m1 mb3 border border-gray">
						<div className="mb4 bg-blue-dark white center">.mb4</div>
					</div>
					<div className="m1 border border-gray">
						<div className="ml1 bg-blue-dark white center">.ml1</div>
					</div>
					<div className="m1 border border-gray">
						<div className="ml2 bg-blue-dark white center">.ml2</div>
					</div>
					<div className="m1 border border-gray">
						<div className="ml3 bg-blue-dark white center">.ml3</div>
					</div>
					<div className="m1 border border-gray">
						<div className="ml4 bg-blue-dark white center">.ml4</div>
					</div>
				</div>
				<div className="md-col md-col-6">
					<div className="m1">
						<h4>Padding</h4>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block pt1 bg-blue-dark white center">.pt1</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block pt2 bg-blue-dark white center">.pt2</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block pt3 bg-blue-dark white center">.pt3</div>
					</div>
					<div className="m1 mb3 border border-gray flex flex-justify-center">
						<div className="inline-block pt4 bg-blue-dark white center">.pt4</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block pr1 bg-blue-dark white center">.pr1</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block pr2 bg-blue-dark white center">.pr2</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block pr3 bg-blue-dark white center">.pr3</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block pr4 bg-blue-dark white center">.pr4</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block pb1 bg-blue-dark white center">.pb1</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block pb2 bg-blue-dark white center">.pb2</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block pb3 bg-blue-dark white center">.pb3</div>
					</div>
					<div className="m1 mb3 border border-gray flex flex-justify-center">
						<div className="inline-block pb4 bg-blue-dark white center">.pb4</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block pl1 bg-blue-dark white center">.pl1</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block pl2 bg-blue-dark white center">.pl2</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block pl3 bg-blue-dark white center">.pl3</div>
					</div>
					<div className="m1 border border-gray flex flex-justify-center">
						<div className="inline-block pl4 bg-blue-dark white center">.pl4</div>
					</div>
				</div>
			</div>

		</div>

	</div>
);

export default Whitespace;
