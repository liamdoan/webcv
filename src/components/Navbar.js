import React, {useState, useEffect} from 'react'
import { 
    Nav, NavbarContainer, NavLogo, MobileIcon, 
    NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink
} from './NavbarElement'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll} from 'react-scroll'
import { useLocation } from 'react-router'

const Navbar = ({toggle}) => { 

    const[scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else {
            setScrollNav(false)
        } 
    } 

    useEffect (() => {
        window.addEventListener('scroll', changeNav)
    }, [])


    // const [nav, setNav] = useState(false)
    
    // const location = useLocation()

    // const changeBackground = () => {
    //     if (window.pageYOffset >= 100) {
    //         setNav(true)
    //     } else {
    //         setNav(false)
    //     }
    // }

    // useEffect(() => {
    //     const watchScroll = () => {
    //         window.addEventListener ('scroll', changeBackground)
    //     }

    //     watchScroll();

    //     return () => {
    //         window.removeEventListener('scroll', changeBackground)
    //     }
    // }, []);


    // let style = {
    //     backgroundColor: nav || location.pathname !== "/" ? '#b1a296' : 'transparent',
    //     transition: '0.4s'
    // }

    

    // Scroll to top of page
    const scrollHome = () => {
        scroll.scrollToTop();
    }
  
    return (   
        <>
            {/* <Nav style={style}> */}
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={scrollHome} scrollNav={scrollNav}>
                        Lam Doan
                    </NavLogo>
                    <MobileIcon onClick={toggle} scrollNav={scrollNav}>
                        <FaBars/>
                    </MobileIcon >
                    <NavMenu>
                    <NavItem>
                            <NavLinks to="portfolio" smooth={true}
                                    duration={1000} spy={true}
                                    exact='true' offset={-75}
                                    scrollNav={scrollNav}>
                                My Works
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true}
                                    duration={1000} spy={true}
                                    exact='true' offset={-70}
                                    scrollNav={scrollNav}>
                                Skills
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="experience" smooth={true}
                                    duration={1000} spy={true}
                                    exact='true' offset={-60}
                                    scrollNav={scrollNav}>
                                Experience
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about" smooth={true}
                                    duration={1000} spy={true}
                                    exact='true' offset={-55}
                                    scrollNav={scrollNav}>
                                About
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="contact" smooth={true}
                                    duration={1000} spy={true}
                                    exact='true' offset={-50}
                                    scrollNav={scrollNav}>
                                        Contact</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
