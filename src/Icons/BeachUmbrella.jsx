// eslint-disable-next-line react/prop-types
const BeachUmbrella = ({height=48, width=48, color="white"}) => {
    return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill={color} stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <line fill="none" stroke={color} x1="8" x2="24" y1="31" y2="31"/>
                <line fill="none" stroke={color} x1="16" x2="16" y1="31" y2="20"/>
                <line fill="none" x1="16" x2="16" y1="16" y2="1"/>
                <path d="M9,16A14.188,14.188,0,0,1,16,4" fill="none" strokeLinecap="butt"/>
                <path d="M23,16A14.188,14.188,0,0,0,16,4" fill="none" strokeLinecap="butt"/>
                <path d="M30,16A14.167,14.167,0,0,0,2,16Z" fill="none"/>
            </g>
        </svg>
	);
}
export default BeachUmbrella