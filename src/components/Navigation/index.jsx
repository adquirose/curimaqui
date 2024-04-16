import { useEffect, useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
import styled from 'styled-components';
import Logo from '../../assets/images/logo.png'
import LogoColor from '../../assets/images/logo-color.png'
import { PhoneCall, Email } from '../../Icons'

const Image = styled.img`
  width:240px;
  @media(max-width:420px){
    width:180px;
  }
`
const Anchor = styled.a`
    color:var(--negro);
    font-size:1.25rem;
    text-decoration:none;
    padding:0 0.25rem;
`

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [colorNav, setColorNav] = useState('') 
    const [colorText, setColorText] = useState('text-nav-blanco')
    const [imgLogo, setImgLogo] = useState(Logo)
    const [colorIcono, setColorIcono] = useState('white')
    const toggle = () => setIsOpen(!isOpen);
    
    useEffect(() => {
        const updateNavbarColor = () => {
            if (
              document.documentElement.scrollTop > 499 ||
              document.body.scrollTop > 499
            ) {
              setColorNav("light");
              setImgLogo(LogoColor)
              setColorText('text-nav-negro')
              setColorIcono('black')
            } else if (
              document.documentElement.scrollTop < 500 ||
              document.body.scrollTop < 500
            ) {
              setColorNav("");
              setImgLogo(Logo)
              setColorText('text-nav-blanco')
              setColorIcono('white')
            }
          };
        window.addEventListener("scroll", updateNavbarColor);
            return function cleanup() {
                window.removeEventListener("scroll", updateNavbarColor);
          };
    },[])
    return(
        <Navbar container={true} fixed='top' color={colorNav} expand="lg" className='py-0'>
            <NavbarBrand href="/">
                <Image src={imgLogo} alt="logo-curimaqui"/>
            </NavbarBrand>
            <div style={{width:'85px', display:'flex', justifyContent:'space-around'}}>
                <Anchor href="tel:+56928140950">
                    <PhoneCall width="32px" color={colorIcono}/>
                </Anchor>
                <Anchor href="mailto:parcelascurimaqui@gmail.com">
                    <Email width="32px" color={colorIcono}/>
                </Anchor>
            </div>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink href="#proyecto" className={colorText}>PROYECTO</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#masterplan" className={colorText}>
                            MASTERPLAN 360º
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#galeria" className={colorText}>
                            GALERIA
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#video" className={colorText}>
                            VIDEO
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#ubicacion" className={colorText}>
                            UBICACIÓN
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#contacto" className={colorText}>
                            CONTACTO
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}
export default Navigation