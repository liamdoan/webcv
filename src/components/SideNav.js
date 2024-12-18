import React from 'react'
import './SideNav.css'
import { useTheme } from '../context/ThemeContext'
import GithubLogo from "../img/logo/github-icon.png"
import LinkedinLogo from "../img/logo/linkedin-icon.png"

const SideNav = () => {
    const {theme} = useTheme();

    return (
        <div className="sidenav">
            <div className="sidenav-wrap">
                <div className="sidenav-icons">
                    <div className="sidenav-github">
                        <a href="//github.com/liamdoan" target="_blank">
                            <img className={`sidenav-github-logo ${theme}`} src={GithubLogo} alt="github" />
                        </a>
                    </div>
                    <div className="sidenav-linkedin">
                        <a href="//www.linkedin.com/in/lamdoan98" target="_blank">
                            <img className={`sidenav-linkedin-logo ${theme}`} src={LinkedinLogo} alt="linkedin" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav
