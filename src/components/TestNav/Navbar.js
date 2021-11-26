import React, {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
import Button from './Button'
import './Navbar.css'


 

function NavBar() {

    const [click, setClick] = useState(false)

    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect( () => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton)

    return (
        <div>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-logo-container">
                        <a href="/" className="navbar-logo" 
                                onClick={closeMobileMenu}>
                            Lam Doan 
                            {/* <i className="fab fa-connectdevelop"></i> */}
                        </a>
                    </div>                   
                    {/* create the toggle of burger btn */}
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                        {/* if clicked, change the className to 1, clicked again, change to 2 */}
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item nav-item-1'>
                            <a href="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="/" className="nav-links" onClick={closeMobileMenu}>
                                About Me
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="/services" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="/products" className="nav-links" onClick={closeMobileMenu}>
                                Experience
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="/products" className="nav-links" onClick={closeMobileMenu}>
                                My Works
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="/products" className="nav-links" onClick={closeMobileMenu}>
                                My Clients
                            </a>
                        </li>
                        <li >
                            <a href="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Contact
                            </a>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">Contact</Button>}
                </div>
            </nav>
        </div>
    )
}

export default NavBar
