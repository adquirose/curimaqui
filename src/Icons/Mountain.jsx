// eslint-disable-next-line react/prop-types
const Mountain = ({height=48, width=48, color='white'} ) => {
    return (
		<svg height={height} width={width} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill={color} stroke={color} strokeLinecap="square" strokeLinejoin="miter" strokeMiterlimit="10" strokeWidth="2">
                <polyline fill="none" points="12.56323,10.34485 9,5 2,17 8.95831,17 " strokeLinecap="butt"/>
                <polyline fill="none" points="19.43677,10.34485 23,5 30,17 23.04169,17 " strokeLinecap="butt"/>
                <line fill="none" stroke={color} strokeLinecap="butt" x1="12.20833" x2="19.79167" y1="11" y2="11"/>
                <polygon fill="none" points="16,4 29,28 3,28 " stroke={color}/>
            </g>
        </svg>
            );
}
export default Mountain