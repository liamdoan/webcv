import React, {useState, useEffect} from 'react'
import { 
    Nav, NavbarContainer, NavLogo, MobileIcon, 
    NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink
} from './NavbarElement'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll} from 'react-scroll'
import ThemeToggleBtn from './ThemeToggleBtn'
import { useTheme } from '../context/ThemeContext'

const Navbar = ({toggle}) => { 
    const[scrollNav, setScrollNav] = useState(false);
    const {theme} = useTheme();

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
                    <NavLogo to="/" onClick={scrollHome} scrollNav={scrollNav} theme={theme}>
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
                                    scrollNav={scrollNav}
                                    theme={theme}>
                                My Works
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true}
                                    duration={1000} spy={true}
                                    exact='true' offset={-70}
                                    scrollNav={scrollNav}
                                    theme={theme}>
                                Tools
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="experience" smooth={true}
                                    duration={1000} spy={true}
                                    exact='true' offset={-60}
                                    scrollNav={scrollNav}
                                    theme={theme}>
                                Experiences
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about" smooth={true}
                                    duration={1000} spy={true}
                                    exact='true' offset={-55}
                                    scrollNav={scrollNav}
                                    theme={theme}>
                                About
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="contact" smooth={true}
                                    duration={1000} spy={true}
                                    exact='true' offset={-50}
                                    scrollNav={scrollNav}
                                    theme={theme}>
                                        Contact
                        </NavBtnLink>
                        <ThemeToggleBtn />
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
