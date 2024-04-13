import React from 'react';

function InstantCamera(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
	<g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
		<line fill="none" strokeLinecap="butt" x1="24" x2="24" y1="4" y2="10"/>
		<line fill="none" strokeLinecap="butt" x1="24" x2="24" y1="26" y2="31"/>
		<line fill="none" stroke={fill} strokeLinecap="butt" x1="4" x2="44" y1="32" y2="32"/>
		<line fill="none" x1="12" x2="36" y1="38" y2="38"/>
		<path d="M36,44H12a8,8,0,0,1-8-8V12a8,8,0,0,1,8-8H36a8,8,0,0,1,8,8V36A8,8,0,0,1,36,44Z" fill="none" stroke={fill}/>
		<circle cx="11" cy="11" fill="none" r="1"/>
		<circle cx="24" cy="18" fill="none" r="8"/>
	</g>
</svg>
	);
};

export default InstantCamera;