import React from 'react';

function SquarePin(props) {
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g fill="#000000" stroke="white" strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <polyline fill="none" points=" 10,34 4,46 44,46 38,34 "/>
                <path d="M38,16 c0,8.641-14,22.75-14,22.75S10,24.641,10,16c0-8.859,7.235-14,14-14S38,7.141,38,16z" fill="none" stroke="white"/>
                <circle cx="24" cy="16" fill="none" r="4" stroke="white"/>
            </g>
        </svg>
	);
};

export default SquarePin;