import React from 'react';

const Lists = () => (
	<div id="lists" className="p2">
		
		<h2 className="my3">Lists</h2>

		<div className="my3">
			<h3>Formatted</h3>
			<p>Some basic, explicit styling is defined to help provide 
			a consistent unordered list appearance across different 
			browsers/viewports. Nested lists are supported.</p>

			<div className="my2">
				<div className="clear">
					<div className="md-col md-col-6">
						<div className="m1 bold">Unordered</div>
						<div className="m1 p1 border border-gray">
							<ul>
								<li>First Item</li>
								<ul>
									<li>Primary Subitem</li>
									<li>Secondary Subitem</li>
								</ul>
								<li>Second Item</li>
								<li>Third Item</li>
							</ul>
						</div>
						<div className="m1 p1 bg-gray-lighter border border-gray monospace">
							&lt;ul&gt;<br/>
							&nbsp;&nbsp;&lt;li&gt;First Item&lt;/li&gt;<br/>
							&nbsp;&nbsp;&lt;ul&gt;<br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Primary Subitem&lt;/li&gt;<br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Secondary Subitem&lt;/li&gt;<br/>
							&nbsp;&nbsp;&lt;/ul&gt;<br/>
							&nbsp;&nbsp;&lt;li&gt;Second Item&lt;/li&gt;<br/>
							&nbsp;&nbsp;&lt;li&gt;Third Item&lt;/li&gt;<br/>
							&lt;/ul&gt;
						</div>
					</div>
					<div className="md-col md-col-6">
						<div className="m1 bold">Ordered</div>
						<div className="m1 p1 border border-gray">
							<ol>
								<li>First Item</li>
								<ol>
									<li>Primary Subitem</li>
									<li>Secondary Subitem</li>
								</ol>
								<li>Second Item</li>
								<li>Third Item</li>
							</ol>
						</div>
						<div className="m1 p1 bg-gray-lighter border border-gray monospace">
							&lt;ol&gt;<br/>
							&nbsp;&nbsp;&lt;li&gt;First Item&lt;/li&gt;<br/>
							&nbsp;&nbsp;&lt;ol&gt;<br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Primary Subitem&lt;/li&gt;<br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Secondary Subitem&lt;/li&gt;<br/>
							&nbsp;&nbsp;&lt;/ol&gt;<br/>
							&nbsp;&nbsp;&lt;li&gt;Second Item&lt;/li&gt;<br/>
							&nbsp;&nbsp;&lt;li&gt;Third Item&lt;/li&gt;<br/>
							&lt;/ol&gt;
						</div>
					</div>
				</div>

				<div className="clear">
					<div className="md-col md-col-6">
						<div className="m1 bold">Mixed - Unordered parent</div>
						<div className="m1 p1 border border-gray">
							<ul>
								<li>First Item</li>
								<ol>
									<li>Primary Subitem</li>
									<li>Secondary Subitem</li>
								</ol>
								<li>Second Item</li>
								<li>Third Item</li>
							</ul>
						</div>
						<div className="m1 p1 bg-gray-lighter border border-gray monospace">
							&lt;ul&gt;<br/>
							&nbsp;&nbsp;&lt;li&gt;First Item&lt;/li&gt;<br/>
							&nbsp;&nbsp;&lt;ul&gt;<br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Primary Subitem&lt;/li&gt;<br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Secondary Subitem&lt;/li&gt;<br/>
							&nbsp;&nbsp;&lt;/ul&gt;<br/>
							&nbsp;&nbsp;&lt;li&gt;Second Item&lt;/li&gt;<br/>
							&nbsp;&nbsp;&lt;li&gt;Third Item&lt;/li&gt;<br/>
							&lt;/ul&gt;
						</div>
					</div>
					<div className="md-col md-col-6">
						<div className="m1 bold">Mixed - Ordered parent</div>
						<div className="m1 p1 border border-gray">
							<ol>
								<li>First Item</li>
								<ul>
									<li>Primary Subitem</li>
									<li>Secondary Subitem</li>
								</ul>
								<li>Second Item</li>
								<li>Third Item</li>
							</ol>
						</div>
						<div className="m1 p1 bg-gray-lighter border border-gray monospace">
							&lt;ol&gt;<br/>
							&nbsp;&nbsp;&lt;li&gt;First Item&lt;/li&gt;<br/>
							&nbsp;&nbsp;&lt;ol&gt;<br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Primary Subitem&lt;/li&gt;<br/>
							&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Secondary Subitem&lt;/li&gt;<br/>
							&nbsp;&nbsp;&lt;/ol&gt;<br/>
							&nbsp;&nbsp;&lt;li&gt;Second Item&lt;/li&gt;<br/>
							&nbsp;&nbsp;&lt;li&gt;Third Item&lt;/li&gt;<br/>
							&lt;/ol&gt;
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="my3">
			<h3>Unformatted</h3>
			<p>If you need to clear out the styling of an individual 
			list, just use the
			<span className="mx1 px1 bg-gray-lighter border border-gray monospace">.no-style</span>
			class on the parent list</p>

			<div className="my2">
				<div className="m1 p1 border border-gray">
					<ul className="no-style">
						<li>First Item</li>
						<ul>
							<li>Primary Subitem</li>
							<li>Secondary Subitem</li>
						</ul>
						<li>Second Item</li>
						<li>Third Item</li>
					</ul>
				</div>
				<div className="m1 p1 bg-gray-lighter border border-gray monospace">
					&lt;ul class=&quot;no-style&quot;&gt;<br/>
					&nbsp;&nbsp;&lt;li&gt;First Item&lt;/li&gt;<br/>
					&nbsp;&nbsp;&lt;ul&gt;<br/>
					&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Primary Subitem&lt;/li&gt;<br/>
					&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&gt;Secondary Subitem&lt;/li&gt;<br/>
					&nbsp;&nbsp;&lt;/ul&gt;<br/>
					&nbsp;&nbsp;&lt;li&gt;Second Item&lt;/li&gt;<br/>
					&nbsp;&nbsp;&lt;li&gt;Third Item&lt;/li&gt;<br/>
					&lt;/ul&gt;
				</div>
			</div>
		</div>

	</div>
);

export default Lists;
