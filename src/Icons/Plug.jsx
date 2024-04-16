// eslint-disable-next-line react/prop-types
function Plug({width=48, height=48, color='white'}) {
	return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill={color} stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <line fill="none" stroke={color} x1="2" x2="6.001" y1="30" y2="25.999"/>
                <line fill="none" stroke={color} x1="14" x2="11" y1="14" y2="17"/>
                <line fill="none" stroke={color} x1="18" x2="15" y1="18" y2="21"/>
                <line fill="none" x1="30" x2="25.999" y1="2" y2="6.001"/>
                <path d="M8.169,14.169,6,16.336A6.833,6.833,0,0,0,15.664,26l2.167-2.168Z" fill="none" stroke={color}/>
                <path d="M23.831,17.831,26,15.664A6.833,6.833,0,0,0,16.336,6L14.169,8.169Z" fill="none"/>
            </g>
        </svg>
	);
}

export default Plug;