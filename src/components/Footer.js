import './Footer.css'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    InstapaperShareButton,
    InstapaperIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share'
import { Link } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import GithubLogo from "../img/github-icon.png"
import LinkedinLogo from "../img/linkedin-icon.png"

 
const Footer = () => {

    const scrollHome = () => {
        scroll.scrollToTop();
    }
 

    return (
        <div className="footer">
            <div className="container footer-container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 footer-main-info">
                        <div className="d-flex">
                            <p>Lam Doan</p>
                        </div> 
                        <div className="d-flex">
                            <p>00100, Helsinki</p>
                        </div>
                        <div className="d-flex">
                            <a className="phone" href="tel:123-456-789">(+358) 406-735-587</a>
                        </div>
                        <div className="d-flex">
                            <p>lamdoan9898@gmail.com</p>
                        </div>
                    </div> 
                    <div className="col-lg-3 col-md-5 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav" onClick={scrollHome}>Home</a>
                                <br />
                                <Link className="footer-nav"
                                    to="portfolio" smooth={true}
                                    duration={1000} spy={true}
                                    exact='true' offset={-65}>My Works</Link>
                                <br />
                                <Link className="footer-nav"
                                    to="services" smooth={true}
                                    duration={1000} spy={true}
                                    exact='true' offset={-80}>Tools</Link>
                            </div>
                            <div className="col">
                            <Link className="footer-nav"
                                    to="experience" smooth={true}
                                    duration={1000} spy={true}
                                    exact='true' offset={-80}>Experience</Link>
                                <br />
                                <Link className="footer-nav" 
                                    to="about" smooth={true}
                                    duration={1000} spy={true}
                                    exact='true' offset={-80}>About</Link>
                                <br />
                                <Link className="footer-nav"
                                    to="contact" smooth={true}
                                    duration={1000} spy={true}
                                    exact='true' offset={-75}>Contacts</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 footer-media">
                        <div className="social-icon d-flex justify-content-center">
                                <a className="github-logo" href="//github.com/liamdoan" target="_blank">
                                    <img src={GithubLogo} alt="github" className="git-logo"/>
                                </a>
                                <a className="linkedin-logo" href="//www.linkedin.com/in/lamdoan98" target="_blank" >
                                    <img src={LinkedinLogo} alt="linkedin" className="linke-logo"/>
                                </a>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright &copy;
                            {new Date().getFullYear()}&nbsp; | All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
