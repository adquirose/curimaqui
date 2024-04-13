import React from 'react';

function DownArrow(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const strokewidth = props.strokewidth || 1;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
			<g fill={secondaryfill} stroke={secondaryfill} strokeWidth="1">
				<polyline fill="none" points="0.5 3.5 6 9.5 11.5 3.5" stroke={fill} strokeLinecap="round" strokeLinejoin="round"/>
			</g>
		</svg>
	);
};

export default DownArrow;