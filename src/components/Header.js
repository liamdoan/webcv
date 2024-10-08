import React, { useEffect, useState } from 'react'
import ReactTyped from 'react-typed'
import './Header.css'
import { Link } from 'react-scroll'
import headLogo from "../img/logo/heading-logo2.svg"


const Header = () => {  

    const [offsetY, setOffsetY] = useState()
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

 
    return ( 
        <div id="home" className="header-wrap"
        > 
            <h1 className="big-title">developer</h1>
            <div className="header-content"
                > 
                <div className="main-info">
                    <h1 className="main-title"
                        data-aos='fade-down'
                        data-aos-duration='900'
                        > 
                            Lam
                            <span data-aos='fade-down'
                                    data-aos-duration="900"        
                                    data-aos-delay='300'> Doan</span>
                    </h1>
                    <ReactTyped className="typed-text" 
                                strings={["Enthusiastic", "Inquisitive", "Creative",]}
                                typeSpeed={30}
                                backSpeed={40}
                                loop
                                data-aos='fade-down'
                                data-aos-duration='900'
                                /> 
                    <Link 
                        className="header-btn"
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
                            Check out my work
                        </Link>
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