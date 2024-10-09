import React, { useEffect, useState } from 'react'
import ReactTyped from 'react-typed'
import './Header.css'
import { Link } from 'react-scroll'
import headLogo from "../img/logo/heading-logo2.svg"
import { useTheme } from '../context/ThemeContext'

const Header = () => {  
    const {theme} = useTheme();

    const [offsetY, setOffsetY] = useState()
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return ( 
        <div id="home" className={`header-wrap ${theme}`}
        > 
            <h1 className={`big-title ${theme}`}>developer</h1>
            <div className="header-content"
                > 
                <div className="main-info">
                    <div className={`main-title ${theme}`}>
                        <h1 data-aos='fade-down'
                            data-aos-duration='900'
                            >
                                Lam
                                <span data-aos='fade-down'
                                        data-aos-duration="900"
                                        data-aos-delay='300'> Doan</span>
                        </h1>
                    </div>
                    <ReactTyped className={`typed-text ${theme}`}
                                strings={["Enthusiastic", "Inquisitive", "Creative",]}
                                typeSpeed={30}
                                backSpeed={40}
                                loop
                                data-aos='fade-down'
                                data-aos-duration='900'
                                /> 
                    <button className={`header-btn ${theme}`}>
                        <Link
                            className='header-btn-link'
                            to="portfolio"
                            smooth={true}
                            duration={1000}
                            spy={true}
                            exact='true'
                            offset={-75}
                            data-aos='fade-down'
                            data-aos-duration='900'
                            data-aos-delay="500"
                        >
                            <span className={`header-btn-link-title ${theme}`}>Check out my work</span>
                        </Link>
                    </button>
                </div>
                <div className="img-wrap"
                    data-aos='fade-up'
                    data-aos-duration="900"
                    data-aos-delay='500'
                    >             
                    <img className="head-logo" src={headLogo} alt="logo" 
                            style={{transform: `transalteY(${offsetY * 0.5}px)`}}/>        
                </div>
            </div>
        </div>
        
    )
} 

export default Header

{/* <section className="Parallax">
                <div className="Parallax_background" 
                        style={{transform: `transalteY(${offsetY * 0.5}px)`}}/>
                <div className="Parallax_background-triangles"
                        style={{transform: `transalteY(${offsetY * 0.5}px)`}}/>
                <div className="Parallax-content"/>
            </section> */}