import React from 'react';

function Athletics(props) {
	const fill = props.fill || 'currentColor';
	const secondaryfill = props.secondaryfill || fill;
	const width = props.width || '100%';
	const height = props.height || '100%';

	return (
		<svg height={height} width={width} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g fill={secondaryfill} stroke={secondaryfill} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <circle cx="35.5" cy="7.5" fill="none" r="4.5" stroke={fill}/>
                <path d="M25,12l-7.922,9.362A4,4,0,0,0,18.116,27.4l6.929,4.042a1,1,0,0,1,.3,1.452L18,43" fill="none" stroke={fill} strokeLinecap="butt"/>
                <path d="M10,15l3.6-5.4a1,1,0,0,1,1.1-.41L25,12l8,6,4.6,8.275a1,1,0,0,0,1.19.463L44,25" fill="none" stroke={fill}/>
                <line fill="none" stroke={fill} strokeLinecap="butt" x1="33" x2="26" y1="18" y2="26.281"/>
                <line fill="none" stroke={fill} x1="14" x2="4" y1="31" y2="43"/>
            </g>
        </svg>
	);
};

export default Athletics;