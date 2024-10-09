import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav ? 'black' : 'transparent') };
/* background: black; */
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
/* background-color: blue; */
`

export const NavLogo = styled.div`
color: ${({scrollNav}) => (scrollNav ? 'white' : '#231f20') };
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: 350;
text-decoration: none;
/* background-color: pink; */
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
    color: ${({scrollNav}) => (scrollNav ? 'white' : '#231f20') };
    
}
`

export const NavMenu = styled.ul`
height: 50px;
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;
/* background-color: red; */
position: relative;
top: 14px;

@media screen and (max-width: 768px) {
    display: none;
} 
`

export const NavItem = styled.li`
height: 80px;
/* background-color: pink; */
`

export const NavLinks = styled(LinkScroll)`
/* background-color: blue; */
color: ${({scrollNav}) => (scrollNav ? 'white' : '#231f20') };
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
    /* color: var(--dark-orange) */
    color: #ad974f;
}

&.active{
    /* border-bottom: 7px solid var(--dark-orange); */
    /* color: var(--dark-orange); */
    border-bottom: 7px solid #ad974f;
    font-weight: 600;
    transition: 0.3s ease-in-out;
}
`  

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;
/* background-color: red; */

@media screen and (max-width: 768px){
    display: none;
}
`

export const NavBtnLink = styled(LinkScroll)`
/* border-radius: 50px; */
background: ${({scrollNav}) => (scrollNav ? 'black' : 'transparent') };
white-space: nowrap;
padding: 10px 22px;
/* color: #010606; */
color: ${({scrollNav}) => (scrollNav ? 'white' : 'black') };
font-size: 15px;
outline: none;
border: ${({scrollNav}) => (scrollNav ? '1px solid white' : '1px solid black') };
cursor: pointer;
transition: all 0.5s ease-in-out;
text-decoration: none;
text-transform: uppercase;
font-weight: 400;
letter-spacing: 0.2px;
margin-right: 1.5rem;

&:hover{
transition: all 0.5s ease-in-out;
background: #ad974f;
color: white;
border: 1px solid #ad974f;
}
`