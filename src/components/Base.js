import React from 'react';

const Base = () => {

	return (
		<div id="modules" className="p2">
			
			<h2 className="my3">Base</h2>

			<div className="my3">
				<p className="mb2">OverEasy has a style reset 
				and box-sizing declaration to make sure everything 
				works as expected. There are no classes to invoke 
				in this module, it is the foundation for the 
				other modules.</p>
				<p>If you use OverEasy at all, you should 
				include this module. If you&apos;re changing 
				things at this level, you probably don&apos;t 
				need OverEasy.</p>
			</div>

			<div className="my3">
				<div className="my1">
					<h5>reset</h5>
					<div className="my1 p1 bg-gray-lighter border border-gray monospace">
						html, body, div, span, applet, object, iframe,<br/>
						h1, h2, h3, h4, h5, h6, p, blockquote, pre,<br/>
						a, abbr, acronym, address, big, cite, code,<br/>
						del, dfn, em, img, ins, kbd, q, s, samp,<br/>
						small, strike, strong, sub, sup, tt, var,<br/>
						b, u, i, center,<br/>
						dl, dt, dd, ol, ul, li,<br/>
						fieldset, form, label, legend,<br/>
						table, caption, tbody, tfoot, thead, tr, th, td,<br/>
						article, aside, canvas, details, embed, <br/>
						figure, figcaption, footer, header, hgroup, <br/>
						menu, nav, output, ruby, section, summary,<br/>
						{`time, mark, audio, video {`}<br/>
						&nbsp;&nbsp;margin: 0;<br/>
						&nbsp;&nbsp;padding: 0;<br/>
						&nbsp;&nbsp;border: 0;<br/>
						&nbsp;&nbsp;font-size: 100%;<br/>
						&nbsp;&nbsp;font: inherit;<br/>
						&nbsp;&nbsp;vertical-align: baseline;<br/>
						{`}`}<br/>
						<br/>
						article, aside, details, figcaption, figure, <br/>
						{`footer, header, hgroup, menu, nav, section {`}<br/>
						&nbsp;&nbsp;display: block;<br/>
						{`}`}
					</div>
				</div>

				<div className="my1">
					<h5>box-sizing</h5>
					<div className="my1 p1 bg-gray-lighter border border-gray monospace">
						{`html {`}<br/>
						&nbsp;&nbsp;box-sizing: border-box;<br/>
						{`}`}<br/>
						<br/>
						{`*, *:before, *:after {`}<br/>
						&nbsp;&nbsp;box-sizing: inherit;<br/>
						{`}`}
					</div>
				</div>
			</div>

		</div>
	);
};

export default Base;
