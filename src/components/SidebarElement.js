import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkScroll } from 'react-scroll'
 
export const SidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: ${({theme}) => theme === 'light' ? 'black' : 'var(--dark-theme-black)'};
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
background: ${({theme}) => theme === 'light' ? 'transparent' : 'linear-gradient(to bottom right, rgba(137, 137, 137, 0.5), var(--dark-theme-black))'};
white-space: nowrap;
padding: 16px 64px;
margin-bottom: 4rem;
font-size: 20px;
font-weight: 350;
letter-spacing: 1px;
text-decoration: none;
outline: none;
color: ${({theme}) => theme === 'light' ? 'white' : 'var(--dark-theme-font-color)'};
border: ${({theme}) => (theme === 'light' ? '1px solid white' : 'none')};
border-radius: ${({theme}) => (theme === 'light' ? 0 : '10px')};
box-shadow: ${({theme}) => theme === 'light' ? 'none' : '7px 7px 10px black, inset 0px 0px 6px rgba(109, 123, 133, 0.5)'};
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover{
color: white;
transition: all 0.2s ease-in-out;
transform: ${({theme}) => theme === 'dark' && 'translateY(3px)'};
background: ${({theme}) => theme === 'light' && 'var(--golden)'};
border: ${({theme}) => theme === 'light' && '1px solid var(--golden)'};
}
`
