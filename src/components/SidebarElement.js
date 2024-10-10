import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRoute } from 'react-router-dom'
 

export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
/* background: rgba(13,13,13, 0.8); */
background: black;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
color: white;
`
 
export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
cursor: pointer;
outline: none;
`

export const SidebarWrapper = styled.div`
color: white;
`

export const SidebarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(5, 80px);
text-align: center;
transform: translateX(-15px);



@media screen and (max-width: 480px){
grid-template-rows: repeat(5, 60px);
}
`

export const SidebarLink = styled(LinkScroll)`
/* background-color: pink; */
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: white;
cursor: pointer;
font-weight: 300;

&:hover{
    color: #ad974f;
    transition: 0.2s ease-in-out;
    width: 100%;
}
`

export const SocialIcons = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
/* background-color: red; */
margin: 10px 0 35px 0;
`

export const GithubLink = styled.a`
`

export const LinkedinLink = styled.a`
`

export const Img = styled.img`
width: 100%;
height: 40px;
transition: 0.3s ease-in-out;
padding: 0 15px;

&:hover {
transform: scale(1.4);
transition: 0.3s ease-in-out;
}
`

export const SideBtnWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const SidebarRoute = styled(LinkScroll)`
text-decoration: none;
border-radius: 0px;
background: transparent;
white-space: nowrap;
padding: 16px 64px;
margin-bottom: 4rem;
color: white;
font-size: 20px;
font-weight: 350;
letter-spacing: 1px;
outline: none;
border: 1px solid white;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover{
transition: all 0.2s ease-in-out;
background:#ad974f;
border: 1px solid #ad974f;
color: #010606;
}
`