import React, {useState, useEffect} from 'react'
import { useTheme } from '../context/ThemeContext'
import { faCss3Alt, faHtml5, faNode, faNodeJs, faJira, faGitlab, faReact, faUikit } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AdobeLogo from '../img/logo/adobe-logo-1.svg'
import JSTSLogo from '../img/logo/logo-jsts.png'
import MongoLogo from '../img/logo/logo-mongo.svg'
import VagrantLogo from '../img/logo/logo-vagrant.png'
import JestLogo from '../img/logo/logo-jest.svg'
import CypressLogo from '../img/logo/logo-cypress.svg'
import NextJSLogo from '../img/logo/logo-nextjs.png'
import './Services.css'

const Services = () => {
    const {theme} = useTheme();

    const [offsetY, setOffsetY] = useState()
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
 
    return (
        <div id="services" className={`services ${theme}`}>
            <h1 className={`services-title ${theme}`}
                style={{transform: `translateY(${offsetY * 0.03}px)`}}
                >
                key competencies</h1> 
                <p className={`sub-services-title ${theme}`}
                    style={{transform: `translateY(${offsetY * 0.04}px)`}}
                    >(and on my way to acquire more ...)</p>
            <h1 className={`services-big-title ${theme}`}
                style={{transform: `translateY(${offsetY * 0.1}px)`}}
                > 
                developer</h1>
            <div className={`services-quote ${theme}`}
                style={{transform: `translateY(${offsetY * 0.01}px)`}}
                >
                <h1 className="upper-quote">
                    “ever positive
                </h1>
                <h1 className="lower-quote">
                    never negative„
                </h1>
            </div>
                <div className="container services-container">
                    <div className={`row services-row ${theme}`}
                        style={{transform: `translateY(-${offsetY * 0.03}px)`}}
                        >
                        <div className="col-lg-2 col-md-4 col-sm-4"
                                data-aos='flip-left'
                                data-aos-duration="700"
                                data-aos-once="true"
                                data-aos-delay='200'> 
                            <div className={`box-wrap ${theme}`}>
                                <div className={`box-react ${theme}`}>
                                    <div className="icon-wrap">
                                        <FontAwesomeIcon className="icon-react" icon={faReact} size ="2x" />
                                    </div>
                                    <h3>React</h3>
                                    {/* <p>Create manageable sites with multiple reusable components</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4"
                                data-aos='flip-left'
                                data-aos-duration="1000"
                                data-aos-once="true"
                                data-aos-delay='600'>
                            <div className={`box-wrap ${theme}`}>
                                <div className={`box-nextjs ${theme}`}>
                                    <div className="icon-wrap">
                                        <img className="icon-nextjs" src={NextJSLogo} alt="nextjs-logo" />
                                    </div>
                                    <h3>NextJS</h3>
                                    {/* <p>Framework NextJS</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4"
                                data-aos='flip-left'
                                data-aos-duration="1000"
                                data-aos-once="true"
                                data-aos-delay='300'>
                            <div className={`box-wrap ${theme}`}>
                                <div className={`box-js ${theme}`}>
                                    <div className="icon-wrap">
                                        <img className="icon-jsts" src={JSTSLogo} alt="jsts-logo" />
                                    </div>
                                    <h3>TypeScript/JavaScript</h3>
                                    {/* <p>Provide logic and functions for the sites</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4"
                                data-aos='flip-left'
                                data-aos-duration="1000"
                                data-aos-once="true"
                                data-aos-delay='400'>
                            <div className={`box-wrap ${theme}`}>
                                <div className={`box-html ${theme}`}>
                                    <div className="icon-wrap">
                                        <FontAwesomeIcon className="icon-html" icon={faHtml5} size ="2x" />
                                    </div>
                                    <h3>HTML</h3>
                                    {/* <p>Build skeleton for the sites</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4"
                                data-aos='flip-left'
                                data-aos-duration="1000"
                                data-aos-once="true"
                                data-aos-delay='500'>
                            <div className={`box-wrap ${theme}`}>
                                <div className={`box-css ${theme}`}>
                                    <div className="icon-wrap">
                                        <FontAwesomeIcon className="icon-css" icon={faCss3Alt} size ="2x" />
                                    </div>
                                    <h3>CSS/SASS</h3>
                                    {/* <p>Clothe the skeleton with striking and aesthetic design</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4"
                                data-aos='flip-left'
                                data-aos-duration="1000"
                                data-aos-once="true"
                                data-aos-delay='600'>
                            <div className={`box-wrap ${theme}`}>
                                <div className={`box-node ${theme}`}>
                                    <div className="icon-wrap">
                                        <FontAwesomeIcon className="icon-node" icon={faNode} size ="2x" />
                                    </div>
                                    <h3>NodeJS</h3>
                                    {/* <p>Make the sites become more eye-catching and user-friendly in design</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4"
                                data-aos='flip-left'
                                data-aos-duration="1000"
                                data-aos-once="true"
                                data-aos-delay='600'>
                            <div className={`box-wrap ${theme}`}>
                                <div className={`box-express ${theme}`}>
                                    <div className="icon-wrap-express">
                                        <span className='express-span'>express</span>
                                        <FontAwesomeIcon className="icon-express" icon={faNodeJs} size ="1x" />
                                    </div>
                                    <h3>ExpressJS</h3>
                                    {/* <p>Make the sites become more eye-catching and user-friendly in design</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4"
                                data-aos='flip-left'
                                data-aos-duration="1000"
                                data-aos-once="true"
                                data-aos-delay='600'>
                            <div className={`box-wrap ${theme}`}>
                                <div className={`box-mongo ${theme}`}>
                                    <div className="icon-wrap">
                                        <img className="icon-mongo" src={MongoLogo} alt="mongo-logo" />
                                    </div>
                                    <h3>MongoDB</h3>
                                    {/* <p>Make the sites become more eye-catching and user-friendly in design</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4"
                                data-aos='flip-left'
                                data-aos-duration="1000"
                                data-aos-once="true"
                                data-aos-delay='600'>
                            <div className={`box-wrap ${theme}`}>
                                <div className={`box-jest ${theme}`}>
                                    <div className="icon-wrap">
                                        <img className="icon-jest" src={JestLogo} alt="jest-logo" />
                                    </div>
                                    <h3>Jest</h3>
                                    {/* <p>Unit and integration testing</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4"
                                data-aos='flip-left'
                                data-aos-duration="1000"
                                data-aos-once="true"
                                data-aos-delay='600'>
                            <div className={`box-wrap ${theme}`}>
                                <div className={`box-cypress ${theme}`}>
                                    <div className="icon-wrap">
                                        <img className="icon-cypress" src={CypressLogo} alt="cypress-logo" />
                                    </div>
                                    <h3>Cypress</h3>
                                    {/* <p>End to end testing</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4"
                                data-aos='flip-left'
                                data-aos-duration="1000"
                                data-aos-once="true"
                                data-aos-delay='600'>
                            <div className={`box-wrap ${theme}`}>
                                <div className={`box-vagrant ${theme}`}>
                                    <div className="icon-wrap">
                                        <img className="icon-vagrant" src={VagrantLogo} alt="mongo-logo" />
                                    </div>
                                    <h3>Vagrant VMs</h3>
                                    {/* <p>Make the sites become more eye-catching and user-friendly in design</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4"
                                data-aos='flip-left'
                                data-aos-duration="1000"
                                data-aos-once="true"
                                data-aos-delay='600'>
                            <div className={`box-wrap ${theme}`}>
                                <div className={`box-jira ${theme}`}>
                                    <div className="icon-wrap">
                                        <FontAwesomeIcon className="icon-jira" icon={faJira} size ="2x" />
                                    </div>
                                    <h3>JIRA</h3>
                                    {/* <p>Make the sites become more eye-catching and user-friendly in design</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4"
                                data-aos='flip-left'
                                data-aos-duration="1000"
                                data-aos-once="true"
                                data-aos-delay='600'>
                            <div className={`box-wrap ${theme}`}>
                                <div className={`box-gitlab ${theme}`}>
                                    <div className="icon-wrap">
                                        <FontAwesomeIcon className="icon-gitlab" icon={faGitlab} size ="2x" />
                                    </div>
                                    <h3>GitLab</h3>
                                    {/* <p>Make the sites become more eye-catching and user-friendly in design</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4"
                                data-aos='flip-left'
                                data-aos-duration="1000"
                                data-aos-once="true"
                                data-aos-delay='600'>
                            <div className={`box-wrap ${theme}`}>
                                <div className={`box-mui ${theme}`}>
                                    <div className="icon-wrap">
                                        <FontAwesomeIcon className="icon-mui" icon={faUikit} size ="2x" />
                                    </div>
                                    <h3>React Material-UI</h3>
                                    {/* <p>Make the sites become more eye-catching and user-friendly in design</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-4"
                                data-aos='flip-left'
                                data-aos-duration="1000"
                                data-aos-once="true"
                                data-aos-delay='700'>
                            <div className={`box-wrap ${theme}`}>
                                <div className={`box-adobe ${theme}`}>
                                    <div className="icon-wrap">
                                        <img className="icon-adobe" src={AdobeLogo} alt="adobe-logo" />
                                    </div>
                                    <h3>Adobe Creative Cloud</h3>
                                    {/* <p>Independently work for specific designs</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Services
