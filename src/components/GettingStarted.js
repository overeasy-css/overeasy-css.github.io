import React from 'react';

const GettingStarted = () => (
	<div id="getting-started" className="p2">
		
		<h2 className="my3">Getting Started</h2>

		<div className="my3">
			<h3>Install</h3>
			<p>Install OverEasy via NPM</p>
			<div className="my1 p1 bg-gray-lighter border border-gray monospace">
				npm install overeasy
			</div>
			<p>If you prefer, you can clone the GitHub repo (or view it&nbsp;
				<a 
					href="https://github.com/overeasy-css/overeasy"
					target="_blank"
					rel="noreferrer noopener"
					className="red-dark underline hover-red-light"
				>
					here
				</a>
				)
			</p>
			<div className="my1 p1 bg-gray-lighter border border-gray monospace break-word">
				git clone https://github.com/overeasy-css/overeasy.git
			</div>
		</div>

		<div className="my3">
			<h3>Usage</h3>
			<p>The quickest way to get started using OverEasy is to link your 
			view directly to the provided CSS in your node_modules folder</p>
			<div className="my1 p1 bg-gray-lighter border border-gray monospace break-word">
				&lt;link rel=&quot;stylesheet&quot; 
				href=&quot;/node_modules/overeasy/dist/overeasy.min.css&quot;&gt;
			</div>
			<p>If you are using a compiler like Sass, you can also import it</p>
			<div className="my1 p1 bg-gray-lighter border border-gray monospace break-word">
				@import &quot;/node_modules/overeasy/dist/overeasy.min.css&quot;
			</div>
			<p>Using OverEasy is as simple as assigning the applicable CSS 
			classes</p>
			<div className="my1 p1 bg-gray-lighter border border-gray monospace">
				&lt;div class=&quot;p1 bg-green yellow caps&quot;&gt;<br/>
				&nbsp;&nbsp;My stuff<br/>
				&lt;/div&gt;
			</div>
			<div className="my1 p1 bg-green yellow caps">My stuff</div>
			<p>Because the class utilities are atomic and each only performs one 
			specific function at a time, you can mix usage in with your other 
			classes and use just the parts of OverEasy you need. It plays quite 
			well with others.</p>
		</div>

	</div>
);

export default GettingStarted;
