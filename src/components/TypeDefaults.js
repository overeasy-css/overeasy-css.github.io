import React from 'react';

const TypeDefaults = () => (
	<div id="type-defaults" className="p2">
		
		<h2 className="my3">Type-defaults</h2>
		<p>A few small opinionated quick-setup config to get your typography
		up and running</p>

		<div className="my3 p1">
			<div className="m1">
				<h3>Headings</h3>
				<p>The class versions of headings set the same font size 
				and style, just without the corresponding Heading margin 
				spacing. This allows you to adjust text display size and 
				style contextually independent of semantic markup.</p>
			</div>

			<div className="clear">
				<div className="lg-col lg-col-6">
					<div className="m1 p1 border border-gray">
						<h1>Quick brown foxes 1</h1>
						<h2>Quick brown foxes 1</h2>
						<h3>Quick brown foxes 1</h3>
						<h4>Quick brown foxes 1</h4>
						<h5>Quick brown foxes 1</h5>
						<h6>Quick brown foxes 1</h6>
					</div>
					<div className="m1 p1 bg-gray-lighter border border-gray monospace">
						&lt;h1&gt;Quick brown foxes 1&lt;/h1&gt;<br/>
						&lt;h2&gt;Quick brown foxes 2&lt;/h2&gt;<br/>
						&lt;h3&gt;Quick brown foxes 3&lt;/h3&gt;<br/>
						&lt;h4&gt;Quick brown foxes 4&lt;/h4&gt;<br/>
						&lt;h5&gt;Quick brown foxes 5&lt;/h5&gt;<br/>
						&lt;h6&gt;Quick brown foxes 6&lt;/h6&gt;
					</div>
				</div>
				<div className="lg-col lg-col-6">
					<div className="m1 p1 border border-gray">
						<p className="h1 my1">Quick brown foxes 1</p>
						<div className="h2 my1">Quick brown foxes 1</div>
						<span className="h3 my1">Quick brown foxes 1</span>
						<h5 className="m0 h4 my1">Quick brown foxes 1</h5>
						<p className="h5 my1">Quick brown foxes 1</p>
						<div className="h6 my1">Quick brown foxes 1</div>
					</div>
					<div className="m1 p1 bg-gray-lighter border border-gray monospace">
						&lt;p class=&quot;h1&quot;&gt;Quick brown foxes 1&lt;/p&gt;<br/>
						&lt;div class=&quot;h2&quot;&gt;Quick brown foxes 2&lt;/div&gt;<br/>
						&lt;span class=&quot;h3&quot;&gt;Quick brown foxes 3&lt;/span&gt;<br/>
						&lt;h5 class=&quot;h4&quot;&gt;Quick brown foxes 4&lt;/h5&gt;<br/>
						&lt;p class=&quot;h5&quot;&gt;Quick brown foxes 5&lt;/p&gt;<br/>
						&lt;div class=&quot;h6&quot;&gt;Quick brown foxes 6&lt;/div&gt;
					</div>
				</div>
			</div>
		</div>

		<div className="my3 p1">
			<div className="m1">
				<h3>Links</h3>
				<p className="mb2">Links are set up to reset browser default styling and 
				match your base text. You can use other OverEasy classes 
				to add desired styles.</p>
				<div className="my1 p1 border border-gray">
					This is a&nbsp;
					<a href="javascript:void(0)" rel="noreferrer noopener">default link</a>
					&nbsp;inside some text<br/>
					This is a&nbsp;
					<a href="javascript:void(0)" rel="noreferrer noopener" className="red hover-yellow hover-underline">styled link</a>
					&nbsp;inside some text
				</div>
				<div className="my1 p1 bg-gray-lighter border border-gray monospace">
					This is a 
					&lt;a href=&quot;#&quot;&gt;default link&lt;/a&gt; 
					inside some text<br/>
					This is a 
					&lt;a href=&quot;#&quot; class=&quot;red hover-yellow hover-underline&quot;&gt;styled link&lt;/a&gt; 
					inside some text
				</div>
			</div>
		</div>

	</div>
);

export default TypeDefaults;
