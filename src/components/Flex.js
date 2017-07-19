import React from 'react';

const Flex = () => {
	let wrappingNodes = [];
	for (var i=0; i < 20; i++) {
		wrappingNodes.push(<div className="m1 p2 bg-blue-dark" key={i}></div>);
	}

	return (
		<div id="flex" className="p2">

			<h2 className="my3">Flex</h2>

			<div className="my3">
				<h3>Parent Classes</h3>
				<p>
					Get started by declaring a Flex parent element using the
					<span className="mx1 px1 bg-gray-lighter border border-gray monospace">.flex</span>
					class
				</p>

				<div className="p1">
					<h4>Orientation</h4>
					<div className="m1 flex flex-wrap">

						<div className="flex-grow m1">
							<div className="my1">
								<span className="bold">Row</span>
								<span className="ml1 gray-dark italic">[Default]</span>
							</div>
							<div className="my1 flex border border-gray">
								<div className="m1 flex-grow p1 bg-blue-dark white center">1</div>
								<div className="m1 flex-grow p1 bg-blue-dark white center">2</div>
								<div className="m1 flex-grow p1 bg-blue-dark white center">3</div>
								<div className="m1 flex-grow p1 bg-blue-dark white center">4</div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;1&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;2&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;3&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;4&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

						<div className="flex-grow m1">
							<div className="my1 bold">Column</div>
							<div className="my1 flex flex-column border border-gray">
								<div className="m1 flex-grow p1 bg-blue-dark white center">1</div>
								<div className="m1 flex-grow p1 bg-blue-dark white center">2</div>
								<div className="m1 flex-grow p1 bg-blue-dark white center">3</div>
								<div className="m1 flex-grow p1 bg-blue-dark white center">4</div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex flex-column&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;1&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;2&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;3&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;4&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

					</div>
				</div>

				<div className="p1">
					<h4>Vertical position</h4>
					<div className="m1 flex flex-wrap flex-justify-center">

						<div className="flex-grow m1">
							<div className="my1">
								<span className="bold">Stretch</span>
								<span className="ml1 gray-dark italic">[Default]</span>
							</div>
							<div className="my1 flex border border-gray">
								<div className="m1 flex-grow py3 bg-blue-dark"></div>
								<div className="m1 flex-grow py2 bg-blue-dark"></div>
								<div className="m1 flex-grow py4 bg-blue-dark"></div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;py3&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;py2&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;py4&quot;&gt;&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

						<div className="flex-grow m1" style={{ maxWidth: '20rem' }}>
							<div className="my1 bold">Center</div>
							<div className="my1 flex flex-center border border-gray">
								<div className="m1 flex-grow py3 bg-blue-dark"></div>
								<div className="m1 flex-grow py2 bg-blue-dark"></div>
								<div className="m1 flex-grow py4 bg-blue-dark"></div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex flex-center&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;py3&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;py2&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;py4&quot;&gt;&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

						<div className="flex-grow m1" style={{ maxWidth: '20rem' }}>
							<div className="my1 bold">Start</div>
							<div className="my1 flex flex-start border border-gray">
								<div className="m1 flex-grow py3 bg-blue-dark"></div>
								<div className="m1 flex-grow py2 bg-blue-dark"></div>
								<div className="m1 flex-grow py4 bg-blue-dark"></div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex flex-start&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;py3&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;py2&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;py4&quot;&gt;&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

						<div className="flex-grow m1" style={{ maxWidth: '20rem' }}>
							<div className="my1 bold">End</div>
							<div className="my1 flex flex-end border border-gray">
								<div className="m1 flex-grow py3 bg-blue-dark"></div>
								<div className="m1 flex-grow py2 bg-blue-dark"></div>
								<div className="m1 flex-grow py4 bg-blue-dark"></div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex flex-end&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;py3&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;py2&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;py4&quot;&gt;&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

						<div className="flex-grow m1" style={{ maxWidth: '20rem' }}>
							<div className="my1 bold">Baseline</div>
							<div className="my1 flex flex-baseline border border-gray">
								<div className="m1 flex-grow py3 bg-blue-dark"></div>
								<div className="m1 flex-grow py2 bg-blue-dark"></div>
								<div className="m1 flex-grow py4 bg-blue-dark"></div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex flex-baseline&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;py3&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;py2&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;py4&quot;&gt;&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

					</div>
				</div>

				<div className="p1">
					<h4>Horizontal spacing</h4>
					<div className="m1 flex flex-wrap">

						<div className="flex-grow m1" style={{ minWidth: '18rem' }}>
							<div className="my1">
								<span className="bold">Justify-start</span>
								<span className="ml1 gray-dark italic">[Default]</span>
							</div>
							<div className="my1 flex border border-gray">
								<div className="m1 px3 py2 bg-blue-dark"></div>
								<div className="m1 px2 py2 bg-blue-dark"></div>
								<div className="m1 px4 py2 bg-blue-dark"></div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;px3 py2&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;px2 py2&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;px4 py2&quot;&gt;&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

						<div className="flex-grow m1" style={{ minWidth: '18rem' }}>
							<div className="my1 bold">Justify-end</div>
							<div className="my1 flex flex-justify-end border border-gray">
								<div className="m1 px3 py2 bg-blue-dark"></div>
								<div className="m1 px2 py2 bg-blue-dark"></div>
								<div className="m1 px4 py2 bg-blue-dark"></div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex flex-justify-end&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;px3 py2&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;px2 py2&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;px4 py2&quot;&gt;&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

						<div className="flex-grow m1" style={{ minWidth: '18rem' }}>
							<div className="my1 bold">Justify-between</div>
							<div className="my1 flex flex-justify-between border border-gray">
								<div className="m1 px3 py2 bg-blue-dark"></div>
								<div className="m1 px2 py2 bg-blue-dark"></div>
								<div className="m1 px4 py2 bg-blue-dark"></div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex flex-justify-between&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;px3 py2&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;px2 py2&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;px4 py2&quot;&gt;&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

						<div className="flex-grow m1" style={{ minWidth: '18rem' }}>
							<div className="my1 bold">Justify-around</div>
							<div className="my1 flex flex-justify-around border border-gray">
								<div className="m1 px3 py2 bg-blue-dark"></div>
								<div className="m1 px2 py2 bg-blue-dark"></div>
								<div className="m1 px4 py2 bg-blue-dark"></div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex flex-justify-around&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;px3 py2&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;px2 py2&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;px4 py2&quot;&gt;&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

						<div className="flex-grow m1" style={{ minWidth: '18rem' }}>
							<div className="my1 bold">Justify-center</div>
							<div className="my1 flex flex-justify-center border border-gray">
								<div className="m1 px3 py2 bg-blue-dark"></div>
								<div className="m1 px2 py2 bg-blue-dark"></div>
								<div className="m1 px4 py2 bg-blue-dark"></div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex flex-justify-center&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;px3 py2&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;px2 py2&quot;&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;px4 py2&quot;&gt;&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

					</div>
				</div>

				<div className="p1">
					<h4>Wrapping</h4>
					<div className="m1 flex flex-wrap">

						<div className="m1">
							<div className="my1">
								<span className="bold">No-wrap</span>
								<span className="ml1 gray-dark italic">[Default]</span>
							</div>
							<div className="my1 flex border border-gray overflow-hidden">
								{wrappingNodes}
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;...<br/>
								&lt;/div&gt;
							</div>
						</div>

						<div className="m1">
							<div className="my1 bold">Wrap</div>
							<div className="my1 flex flex-wrap border border-gray">
								{wrappingNodes}
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex flex-wrap&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;...<br/>
								&lt;/div&gt;
							</div>
						</div>

					</div>
				</div>

			</div>

			<div className="my3">
				<h3>Child Classes</h3>
				<p>Use these for child-specific behaviors.
				These work for first-level child elements only.
				An element may be both a Parent and Child flex
				element without conflict.</p>

				<div className="p1">
					<h4>Ordering overrides</h4>
					<div className="m1 flex flex-wrap">

						<div className="m1 flex-grow">
							<div className="my1 px2 flex">
								<div className="bold green flex-grow">.flex-first</div>
								<div className="bold red">.flex-last</div>
							</div>
							<div className="my1 flex border border-gray">
								<div className="m1 flex-grow px2 py1 bg-blue-dark white center">1</div>
								<div className="m1 flex-grow px2 py1 bg-blue-dark white center">2</div>
								<div className="m1 flex-grow flex-first px2 py1 bg-green white center">3</div>
								<div className="m1 flex-grow px2 py1 bg-blue-dark white center">4</div>
								<div className="m1 flex-grow flex-last px2 py1 bg-red white center">5</div>
								<div className="m1 flex-grow px2 py1 bg-blue-dark white center">6</div>
								<div className="m1 flex-grow px2 py1 bg-blue-dark white center">7</div>
								<div className="m1 flex-grow px2 py1 bg-blue-dark white center">8</div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;1&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;2&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;flex-first&quot;&gt;3&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;4&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;flex-last&quot;&gt;5&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;6&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;7&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;8&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

					</div>
				</div>

				<div className="p1">
					<h4>Horizontal adjustment</h4>
					<div className="m1 flex flex-wrap">

						<div className="flex-grow m1" style={{ minWidth: '18rem' }}>
							<div className="my1">
								<span className="bold">Shrink</span>
								<span className="ml1 gray-dark italic">[Default]</span>
							</div>
							<div className="my1 flex border border-gray">
								<div className="m1 p1 bg-blue-dark white">text</div>
								<div className="m1 p1 bg-blue-dark white">text</div>
								<div className="m1 p1 bg-blue-dark white">text</div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;text&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;text&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;text&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

						<div className="flex-grow m1" style={{ minWidth: '18rem' }}>
							<div className="my1 bold">Grow</div>
							<div className="my1 flex border border-gray">
								<div className="m1 flex-grow p1 bg-blue-dark white center">grow</div>
								<div className="m1 flex-grow p1 bg-blue-dark white center">grow</div>
								<div className="m1 p1 bg-blue-dark white center">text</div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;flex-grow&quot;&gt;grow&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;flex-grow&quot;&gt;grow&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;text&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

						<div className="flex-grow m1" style={{ minWidth: '18rem' }}>
							<div className="my1 bold">Auto</div>
							<div className="my1 flex border border-gray">
								<div className="m1 p1 bg-blue-dark white center">text</div>
								<div className="m1 flex-auto p1 bg-blue-dark white center">auto</div>
								<div className="m1 p1 bg-blue-dark white center">text</div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;text&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;flex-auto&quot;&gt;auto&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;text&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

						<div className="flex-grow m1" style={{ minWidth: '18rem' }}>
							<div className="my1 bold">None</div>
							<div className="my1 flex border border-gray">
								<div className="m1 p1 bg-blue-dark white center">text</div>
								<div className="m1 flex-none p1 bg-blue-dark white center">none</div>
								<div className="m1 p1 bg-blue-dark white center">text</div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;text&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;flex-none&quot;&gt;none&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;text&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

					</div>

				</div>

				<div className="p1">
					<h4>Vertical adjustment overrides</h4>
					<p>For making an individual child element an exception
					to the parent&apos;s vertical behavior setting</p>

					<div className="m1 flex flex-wrap">

						<div className="flex-grow m1" style={{ maxWidth: '21rem' }}>
							<div className="my1 bold">Self-start</div>
							<div className="my1 flex flex-end border border-gray" style={{ minHeight: '5rem' }}>
								<div className="m1 p1 flex-grow bg-blue-dark">&nbsp;</div>
								<div className="m1 p1 flex-grow flex-self-start bg-blue-dark white center">hey</div>
								<div className="m1 p1 flex-grow bg-blue-dark">&nbsp;</div>
								<div className="m1 p1 flex-grow bg-blue-dark">&nbsp;</div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex flex-end&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;flex-self-start&quot;&gt;hey&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

						<div className="flex-grow m1">
							<div className="my1 bold">Self-end</div>
							<div className="my1 flex flex-start border border-gray" style={{ minHeight: '5rem' }}>
								<div className="m1 p1 flex-grow bg-blue-dark">&nbsp;</div>
								<div className="m1 p1 flex-grow bg-blue-dark">&nbsp;</div>
								<div className="m1 p1 flex-grow flex-self-end bg-blue-dark white center">no</div>
								<div className="m1 p1 flex-grow bg-blue-dark">&nbsp;</div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex flex-start&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;flex-self-end&quot;&gt;no&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

						<div className="flex-grow m1">
							<div className="my1 bold">Self-center</div>
							<div className="my1 flex border border-gray" style={{ minHeight: '5rem' }}>
								<div className="m1 p1 flex-grow bg-blue-dark">&nbsp;</div>
								<div className="m1 p1 flex-grow flex-self-center bg-blue-dark white center">wut</div>
								<div className="m1 p1 flex-grow bg-blue-dark">&nbsp;</div>
								<div className="m1 p1 flex-grow bg-blue-dark">&nbsp;</div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;flex-self-center&quot;&gt;wut&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

						<div className="flex-grow m1">
							<div className="my1 bold">Self-baseline</div>
							<div className="my1 flex border border-gray" style={{ minHeight: '5rem' }}>
								<div className="m1 p1 flex-grow flex-self-baseline bg-blue-dark white center">stahp</div>
								<div className="m1 p1 flex-grow bg-blue-dark">&nbsp;</div>
								<div className="m1 p1 flex-grow bg-blue-dark">&nbsp;</div>
								<div className="m1 p1 flex-grow bg-blue-dark">&nbsp;</div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;flex-self-baseline&quot;&gt;stahp&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

						<div className="flex-grow m1">
							<div className="my1 bold">Self-stretch</div>
							<div className="my1 flex flex-end border border-gray" style={{ minHeight: '5rem' }}>
								<div className="m1 p1 flex-grow bg-blue-dark">&nbsp;</div>
								<div className="m1 p1 flex-grow bg-blue-dark">&nbsp;</div>
								<div className="m1 p1 flex-grow bg-blue-dark">&nbsp;</div>
								<div className="m1 p1 flex-grow flex-self-stretch bg-blue-dark white center">srsly</div>
							</div>
							<div className="my1 p1 bg-gray-lighter border border-gray monospace">
								&lt;div class=&quot;flex flex-end&quot;&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div&gt;&lt;/div&gt;<br/>
								&nbsp;&nbsp;&lt;div class=&quot;flex-self-stretch&quot;&gt;srsly&lt;/div&gt;<br/>
								&lt;/div&gt;
							</div>
						</div>

					</div>
				</div>

			</div>

		</div>
	);
};

export default Flex;
