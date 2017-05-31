import React from 'react';

const Grid = () => (
	<div id="grid" className="p2">
		
		<h2 className="my3">Grid</h2>
		<p>Column sizes are expressed as portions of the 
		total number. There are 12 columns by default, but 
		the number of columns can be changed to any number 
		and the distribution logic works the same. Widths 
		are defined as percentages of the total, so the 
		whole system is inherently nestable.</p>
		<p>
			To keep things organized, sections of floating 
			columns should be in a
			<span className="mx1 px1 bg-gray-lighter border border-gray monospace">.clear</span>
			wrapper
		</p>

		<div className="my3 p1">
			<h3>Column size utilities</h3>
			<div className="my1 clear">
				<div className="col col-1 p1 border border-white bg-blue-dark white center">1</div>
				<div className="col col-11 p1 border border-white bg-blue-dark white center">11</div>
				<div className="col col-2 p1 border border-white bg-blue-dark white center">2</div>
				<div className="col col-10 p1 border border-white bg-blue-dark white center">10</div>
				<div className="col col-3 p1 border border-white bg-blue-dark white center">3</div>
				<div className="col col-9 p1 border border-white bg-blue-dark white center">9</div>
				<div className="col col-4 p1 border border-white bg-blue-dark white center">4</div>
				<div className="col col-8 p1 border border-white bg-blue-dark white center">8</div>
				<div className="col col-5 p1 border border-white bg-blue-dark white center">5</div>
				<div className="col col-7 p1 border border-white bg-blue-dark white center">7</div>
				<div className="col col-6 p1 border border-white bg-blue-dark white center">6</div>
				<div className="col col-6 p1 border border-white bg-blue-dark white center">6</div>
				<div className="col col-12 p1 border border-white bg-blue-dark white center">12</div>
			</div>
			<div className="my1 p1 bg-gray-lighter border border-gray monospace">
				&lt;div class=&quot;flex&quot;&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col col-1&quot;&gt;1&lt;/div&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col col-11&quot;&gt;11&lt;/div&gt;<br/>
				<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col col-2&quot;&gt;2&lt;/div&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col col-10&quot;&gt;10&lt;/div&gt;<br/>
				<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col col-3&quot;&gt;3&lt;/div&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col col-9&quot;&gt;9&lt;/div&gt;<br/>
				<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col col-4&quot;&gt;4&lt;/div&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col col-8&quot;&gt;8&lt;/div&gt;<br/>
				<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col col-5&quot;&gt;5&lt;/div&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col col-7&quot;&gt;7&lt;/div&gt;<br/>
				<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col col-6&quot;&gt;6&lt;/div&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col col-6&quot;&gt;6&lt;/div&gt;<br/>
				<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col col-12&quot;&gt;12&lt;/div&gt;<br/>
				&lt;/div&gt;
			</div>
		</div>

		<div className="my3">
			<h3>Floating</h3>
			<p className="mb2">
				To make the columns act like columns, they should be floated. Use 
				<span className="mx1 px1 bg-gray-lighter border border-gray monospace">.col</span>
				to float left and 
				<span className="mx1 px1 bg-gray-lighter border border-gray monospace">.col-right</span>
				to float right. 
				As long as you clear your rows, your columns don't need to equal 100% 
				and you can float in one or both directions.
			</p>

			<div className="my1">
				<div className="clear">
					<div className="col col-1 p1 border border-white bg-blue-dark white center">1</div>
					<div className="col col-2 p1 border border-white bg-blue-dark white center">2</div>
					<div className="col-right col-5 p1 border border-white bg-blue-dark white center">5</div>
				</div>
				<div className="clear">
					<div className="col-right col-4 p1 border border-white bg-blue-dark white center">4</div>
					<div className="col-right col-3 p1 border border-white bg-blue-dark white center">3</div>
				</div>
				<div className="clear">
					<div className="col col-2 p1 border border-white bg-blue-dark white center">2</div>
					<div className="col col-4 p1 border border-white bg-blue-dark white center">4</div>
					<div className="col-right col-4 p1 border border-white bg-blue-dark white center">4</div>
				</div>
			</div>
			<div className="my1 p1 bg-gray-lighter border border-gray monospace">
				&lt;div class=&quot;clear&quot;&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col col-1&quot;&gt;1&lt;/div&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col col-2&quot;&gt;2&lt;/div&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col-right col-5&quot;&gt;5&lt;/div&gt;<br/>
				&lt;/div&gt;<br/>
				&lt;div class=&quot;clear&quot;&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col-right col-4&quot;&gt;4&lt;/div&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col-right col-3&quot;&gt;3&lt;/div&gt;<br/>
				&lt;/div&gt;<br/>
				&lt;div class=&quot;clear&quot;&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col col-2&quot;&gt;1&lt;/div&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col col-4&quot;&gt;2&lt;/div&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;col-right col-4&quot;&gt;4&lt;/div&gt;<br/>
				&lt;/div&gt;
			</div>
		</div>

		<div className="my3">
			<h3>Responsive resizing</h3>
			<p className="mb2">OverEasy is a mobile-first grid, meaning the default behaviors apply at the 
			smallest display size. Small, medium, and large grid behaviors will kick in above 
			their corresponding breakpoints. Resize your browser to see this working.</p>
			<p className="mb2">In this example:</p>
			<ul className="disc mb2">
				<li>By default, or at smallest display, divs will be full-width, 
				so no default float or sizing needed.</li>
				<li>Above the Small breakpoint, divs are halfs width (6 of 12 columns) 
				and should float left from here up.</li>
				<li>Above the Medium breakpoint, divs are thirds width (4 of 12 columns). 
				Float is inherited.</li>
				<li>Above the Large breakpoint, divs are sixths width (2 of 12 columns). 
				Float is inherited.</li>
			</ul>
			<div className="clear my1">
				<div className="sm-col sm-col-6 md-col-4 lg-col-2 p1 border border-white bg-blue-dark white center caps">First</div>
				<div className="sm-col sm-col-6 md-col-4 lg-col-2 p1 border border-white bg-blue-dark white center caps">Second</div>
				<div className="sm-col sm-col-6 md-col-4 lg-col-2 p1 border border-white bg-blue-dark white center caps">Third</div>
				<div className="sm-col sm-col-6 md-col-4 lg-col-2 p1 border border-white bg-blue-dark white center caps">Fourth</div>
				<div className="sm-col sm-col-6 md-col-4 lg-col-2 p1 border border-white bg-blue-dark white center caps">Fifth</div>
				<div className="sm-col sm-col-6 md-col-4 lg-col-2 p1 border border-white bg-blue-dark white center caps">Sixth</div>
			</div>
			<div className="my1 p1 bg-gray-lighter border border-gray monospace">
				&lt;div class=&quot;clear&quot;&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;sm-col sm-col-6 md-col-4 lg-col-2&quot;&gt;First&lt;/div&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;sm-col sm-col-6 md-col-4 lg-col-2&quot;&gt;Second&lt;/div&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;sm-col sm-col-6 md-col-4 lg-col-2&quot;&gt;Third&lt;/div&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;sm-col sm-col-6 md-col-4 lg-col-2&quot;&gt;Fourth&lt;/div&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;sm-col sm-col-6 md-col-4 lg-col-2&quot;&gt;Fifth&lt;/div&gt;<br/>
				&nbsp;&nbsp;&lt;div class=&quot;sm-col sm-col-6 md-col-4 lg-col-2&quot;&gt;Sixth&lt;/div&gt;<br/>
				&lt;/div&gt;
			</div>
		</div>

	</div>
);

export default Grid;
