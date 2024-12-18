import React from 'react'
import { 
    SidebarContainer, Icon, CloseIcon, SidebarWrapper, 
    SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute,
    SocialIcons, GithubLink, LinkedinLink, Img}
    from './SidebarElement'
import ThemeToggleBtn from './ThemeToggleBtn'
import GithubLogo from "../img/logo/github-icon.png"
import LinkedinLogo from "../img/logo/linkedin-icon.png"
import { useTheme } from '../context/ThemeContext'

const Sidebar = ({isOpen, toggle}) => {
    const {theme} = useTheme();

    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle} theme={theme}>
                <Icon onClick={toggle}>
                    <CloseIcon/>
                </Icon> 
                <SidebarWrapper>
                    <SidebarMenu> 
                        <SidebarLink
                            to="portfolio" smooth={true}
                            duration={1000} spy={true}
                            exact='true' offset={-75}
                            onClick={toggle}
                        >
                            My Works
                        </SidebarLink>
                        <SidebarLink
                            to="services" smooth={true}
                            duration={1000} spy={true}
                            exact='true' offset={-70}
                            onClick={toggle}
                        >
                            Tools
                        </SidebarLink>
                        <SidebarLink
                            to="experience" smooth={true}
                            duration={1000} spy={true}
                            exact='true' offset={-70}
                            onClick={toggle}
                        >
                            Experiences
                        </SidebarLink>
                        <SidebarLink
                            to="about" smooth={true}
                            duration={1000} spy={true}
                            exact='true' offset={-70}
                            onClick={toggle}
                        >
                            About
                        </SidebarLink>
                        {/* <SidebarLink to="clients" smooth={true}
                                    duration={1000} spy={true}
                                    exact='true' offset={-80}
                                    onClick={toggle}>My Clients</SidebarLink> */}
                    </SidebarMenu>
                    <SocialIcons>
                        <GithubLink href="//github.com/liamdoan" target="_blank">
                            <Img src={GithubLogo} alt="github"/>
                        </GithubLink>
                        <LinkedinLink href="//www.linkedin.com/in/lamdoan98" target="_blank">
                            <Img src={LinkedinLogo} alt="linkedin"/>
                        </LinkedinLink>
                    </SocialIcons>
                    <SideBtnWrap>
                        <SidebarRoute
                            to="contact" smooth={true}
                            duration={1000} spy={true}
                            exact='true' offset={-70}
                            onClick={toggle}
                            theme={theme}
                        >
                            Contact
                        </SidebarRoute>
                        <ThemeToggleBtn />
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
