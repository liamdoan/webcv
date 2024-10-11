import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'

export const Nav = styled.nav`
background: ${({scrollNav, theme}) => theme === 'light' ? (scrollNav ? 'black' : 'transparent'): ((scrollNav ? 'var(--dark-theme-black)' : 'transparent'))};
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
/* font-size: 1rem; */
position: sticky; 
top: 0; 
z-index: 10;
transition: 0.5s ease-in-out;
width: ${({theme}) => theme === 'light' ? '100%' : '95%'};
margin-left: ${({theme}) => theme === 'light' ? '0' : 'auto'};
margin-right: ${({theme}) => theme === 'light' ? '0' : 'auto'};
border-radius: ${({theme}) => theme === 'light' ? '0' : '20px'};
box-shadow: ${({scrollNav, theme}) => theme === 'light' ? 'none' : ((scrollNav ? '3px 3px 25px rgba(0, 0, 0, 1), inset 0px 0px 8px rgba(109, 123, 133, 0.3)' : 'none'))};

@media screen and (max-width: 960px) {
    transition: 0.5s ease-in-out;
}
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0;
max-width: 1100px;
`

export const NavLogo = styled.div`
color: ${({scrollNav, theme}) => (theme === 'light' ? (scrollNav ? 'white' : '#231f20') : 'white')};
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: 350;
text-decoration: none;
`

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 40%);
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({scrollNav}) => (scrollNav ? 'white' : '#231f20')};
}
`

export const StyledFaBars = styled(FaBars)`
    color: ${({theme}) => theme === 'light' ? 'black' : 'white'};
`

export const NavMenu = styled.ul`
height: 50px;
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;
position: relative;
top: 14px;

@media screen and (max-width: 768px) {
    display: none;
} 
`

export const NavItem = styled.li`
height: 80px;
`

export const NavLinks = styled(LinkScroll)`
color: ${({scrollNav, theme}) => (theme === 'light' ? (scrollNav ? 'white' : '#231f20') : 'white')};
display: flex;
align-items: center;
text-decoration: none;
text-transform: uppercase;
font-style: italic; 
padding: 0 1rem;
height: 100%;
cursor: pointer;
font-size: clamp(0.85rem, 1.4vw, 1rem);
font-weight: 350;
letter-spacing: 0.1px;

&:hover {
    color: var(--golden);
}

&.active{
    border-bottom: 7px solid var(--golden);
    font-weight: 600;
    transition: 0.3s ease-in-out;
}
`

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavBtnLink = styled(LinkScroll)`
background: ${({scrollNav, theme}) => (
    theme === 'light'
    ? (scrollNav ? 'black' : 'transparent')
    : 'linear-gradient(to bottom right, rgba(137, 137, 137, 0.5), var(--dark-theme-black));'
)};
white-space: nowrap;
padding: 10px 22px;
font-size: 15px;
outline: none;
text-decoration: none;
text-transform: uppercase;
font-weight: 400;
letter-spacing: 0.2px;
margin-right: 1.5rem;
color: ${({scrollNav, theme}) => (theme === 'light' ? (scrollNav ? 'white' : '#231f20') : 'var(--dark-theme-font-color)')};
box-shadow: ${({theme}) => theme === 'light' ? 'none' : '7px 7px 10px black, inset 0px 0px 6px rgba(109, 123, 133, 0.5)'};
border-radius: ${({theme}) => (theme === 'light' ? 0 : '10px')};
border: ${({scrollNav, theme}) => (theme === 'light' ? (scrollNav ? '1px solid white' : '1px solid black') : 'none')};
cursor: pointer;
transition: all 0.3s ease-in-out;

&:hover{
color: white;
transition: all 0.3s ease-in-out, transform 0.2s ease-in-out;
transform: ${({theme}) => theme === 'dark' && 'translateY(3px)'};
background: ${({theme}) => theme === 'light' && 'var(--golden)' };
border: ${({theme}) => theme === 'light' && '1px solid var(--golden)'};
}
`
