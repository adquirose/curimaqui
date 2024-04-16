import styled from 'styled-components'
import Ws from '../../assets/images/logo-whatsapp.png'
import Ig from '../../assets/images/logo-instagram.png'
import Fb from '../../assets/images/logo-facebook.png'

const Container = styled.div`
    position: fixed;
    bottom:10px;
    width: 60px;
    height:180px;
    right: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Anchor = styled.a`
    text-decoration:none;
`
const Rs = () => {
    return(
        <Container>
            <Anchor className="pb-2" href="https://wa.me/56934021771" target="blank">
                <img src={Ws} alt="logo-ws"/>
            </Anchor>
            <Anchor className="pb-2" href="https://www.instagram.com/parcelascurimaqui?igsh=YW50NWpvdnd4bjMz&utm_source=qr" target="blank">
                <img src={Ig} alt="logo-instagram"/>
            </Anchor>
            <Anchor className="pb-2" href="https://www.facebook.com/profile.php?id=61555944478597" target="blank">
                <img src={Fb} alt="logo-fb"/>
            </Anchor>
        </Container>
    )
}
export default Rs