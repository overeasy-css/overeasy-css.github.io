import React from 'react';

const Colors = () => {
	const colorNames = [
		{ name: 'red' },
		{ name: 'yellow' },
		{ name: 'green' },
		{ name: 'blue' },
		{ name: 'gray' }
	];
	const variantNames = [
		{ name: 'lighter' },
		{ name: 'light' },
		{ name: 'dark' },
		{ name: 'darker' }
	];

	return (
		<div id="colors" className="p2">
			
			<h2 className="my3">Colors</h2>

			<div className="my3">
				<h3>Palette</h3>

				<p className="mb2">OverEasy uses Sass to 
				auto-generate utilities for all colors defined 
				in the palette. Name and define your colors in 
				one place and use them contextually throughout 
				your site.</p>

				<p className="mb2">Base black and white are set 
				independently, then other colors are set in the 
				Palette. You can have any number of colors in 
				the Palette. The following colors are set by 
				default:</p>

				<div className="my1 p1 bg-gray-lighter border border-gray monospace break-word">
					$color-base-black: #000;<br/>
					$color-base-white: #FFF;<br/>
					$color-palette: (<br/>
					&nbsp;&nbsp;'red': #B02121,<br/>
					&nbsp;&nbsp;'yellow': #FFBE1A,<br/>
					&nbsp;&nbsp;'green': #1E852F,<br/>
					&nbsp;&nbsp;'blue': #344152,<br/>
					&nbsp;&nbsp;'gray': #B3BBBC<br/>
					);
				</div>
			</div>

			<div className="my3">
				<h3>Color utilities</h3>

				<p className="mb2">Color utilities are 
				auto-generated from the color names and 
				values in the Palette</p>

				<div className="my2 p1">
					<h4>Text colors</h4>
					<div className="flex flex-wrap">
						{colorNames.map(color => 
							<div 
								className={'m1 flex-grow bold center p1 ' + color.name}
								key={color.name}
							>
								.{color.name}
							</div>
						)}
					</div>
				</div>

				<div className="my2 p1">
					<h4>Hover colors</h4>
					<div className="flex flex-wrap">
						{colorNames.map(color => 
							<div 
								className={'m1 flex-grow bold center p1 hover-' + color.name}
								key={color.name}
							>
								.hover-{color.name}
							</div>
						)}
					</div>
				</div>

				<div className="my2 p1">
					<h4>Variants</h4>

					<p>Each color utility automatically generates 4 
					mix variants to expand your palette</p>

					<div className="my1 flex flex-wrap">
						{colorNames.map(color => 
							<div 
								className="flex-grow"
								key={color.name}
							>
								{variantNames.map(variant => 
									<div
										className={'m1 bold center p1 ' + color.name + '-' + variant.name}
										key={variant.name}
									>
										.{color.name + '-' + variant.name}
									</div>
								)}
							</div>
						)}
					</div>

					<div className="my1 flex flex-wrap">
						{colorNames.map(color => 
							<div 
								className="flex-grow"
								key={color.name}
							>
								{variantNames.map(variant => 
									<div
										className={'m1 bold center p1 hover-' + color.name + '-' + variant.name}
										key={variant.name}
									>
										.hover-{color.name + '-' + variant.name}
									</div>
								)}
							</div>
						)}
					</div>
				</div>

				<div className="my2 p1">
					<h4>Background colors</h4>
					
					<div className="my1 flex flex-wrap">
						{colorNames.map(color => 
							<div 
								className={'m1 flex-grow bold center p1 bg-' + color.name}
								key={color.name}
							>
								.bg-{color.name}
							</div>
						)}
					</div>

					<div className="my1 flex flex-wrap">
						{colorNames.map(color => 
							<div 
								className="flex-grow"
								key={color.name}
							>
								{variantNames.map(variant => 
									<div
										className={'m1 bold center p1 bg-' + color.name + '-' + variant.name}
										key={variant.name}
									>
										.bg-{color.name + '-' + variant.name}
									</div>
								)}
							</div>
						)}
					</div>
					
					<div className="my1 flex flex-wrap">
						{colorNames.map(color => 
							<div 
								className={'m1 flex-grow bold center p1 hover-bg-' + color.name}
								key={color.name}
							>
								.hover-bg-{color.name}
							</div>
						)}
					</div>

					<div className="my1 flex flex-wrap">
						{colorNames.map(color => 
							<div 
								className="flex-grow"
								key={color.name}
							>
								{variantNames.map(variant => 
									<div
										className={'m1 bold center p1 hover-bg-' + color.name + '-' + variant.name}
										key={variant.name}
									>
										.hover-bg-{color.name + '-' + variant.name}
									</div>
								)}
							</div>
						)}
					</div>
				</div>

				<div className="my2 p1">
					<h4>Border colors</h4>
					
					<div className="my1 flex flex-wrap">
						{colorNames.map(color => 
							<div 
								className={'m1 flex-grow bold center p1 border border-' + color.name}
								key={color.name}
							>
								.border-{color.name}
							</div>
						)}
					</div>

					<div className="my1 flex flex-wrap">
						{colorNames.map(color => 
							<div 
								className="flex-grow"
								key={color.name}
							>
								{variantNames.map(variant => 
									<div
										className={'m1 bold center p1 border border-' + color.name + '-' + variant.name}
										key={variant.name}
									>
										.border-{color.name + '-' + variant.name}
									</div>
								)}
							</div>
						)}
					</div>
					
					<div className="my1 flex flex-wrap">
						{colorNames.map(color => 
							<div 
								className={'m1 flex-grow bold center p1 border border-transparent hover-border-' + color.name}
								key={color.name}
							>
								.hover-border-{color.name}
							</div>
						)}
					</div>

					<div className="my1 flex flex-wrap">
						{colorNames.map(color => 
							<div 
								className="flex-grow"
								key={color.name}
							>
								{variantNames.map(variant => 
									<div
										className={'m1 bold center p1 border border-transparent hover-border-' + color.name + '-' + variant.name}
										key={variant.name}
									>
										.hover-border-{color.name + '-' + variant.name}
									</div>
								)}
							</div>
						)}
					</div>
				</div>

			</div>

		</div>
	);
};

export default Colors;
