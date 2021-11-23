import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FaBars} from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks
} from './NavbarElements'

const Navbar = ({ toggle }) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
      <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>logo_placeholder</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                     <NavItem>
                         <NavLinks to='section1' smooth={true} duration={500} spy={true} exact='true' offset={-80}>section_1</NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks to='section2' smooth={true} duration={500} spy={true} exact='true' offset={-80}>section_2</NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks to='section3' smooth={true} duration={500} spy={true} exact='true' offset={-80}>section_3</NavLinks>
                     </NavItem>
                     <NavItem>
                         <NavLinks to='section4' smooth={true} duration={500} spy={true} exact='true' offset={-80}>section_4</NavLinks>
                     </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
      </>  
    );
}

export default Navbar
