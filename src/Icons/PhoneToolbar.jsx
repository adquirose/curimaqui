import React from 'react';

function PhoneToolbar(props) {
	const color = props.color || 'white';
	const strokewidth = props.strokewidth || 4;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
			<g fill={color} stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth={strokewidth}>
				<line fill="none" x1="13" x2="35" y1="38" y2="38"/>
				<path d="M36,46H12a4,4,0,0,1-4-4V6a4,4,0,0,1,4-4H36a4,4,0,0,1,4,4V42A4,4,0,0,1,36,46Z" fill="none" stroke={color}/>
			</g>
		</svg>
	);
};

export default PhoneToolbar;