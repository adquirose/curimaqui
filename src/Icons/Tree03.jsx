// eslint-disable-next-line react/prop-types
const Tree03 = ({height=48, width=48, color='white'}) => {
    return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill={color} stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <polygon fill="none" points="16,3 3,26 29,26 " stroke={color}/>
                <line fill="none" strokeLinecap="butt" x1="16" x2="16" y1="11" y2="31"/>
                <line fill="none" strokeLinecap="butt" x1="10" x2="22" y1="31" y2="31"/>
                <polyline fill="none" points="12,18 16,22 20,18 " strokeLinecap="butt"/>
            </g>
        </svg>
	);
}
export default Tree03