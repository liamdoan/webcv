import React, {useState, useEffect} from 'react'
import { useTheme } from '../context/ThemeContext'
import MyWorkCardItem from './MyWorkCardItem'
import thumbnailCabBooking from '../img/thumbnails/thumbnail-cab-booking.jpg'
import thumbnailZarosenStore from '../img/thumbnails/thumbnail-zarosen.jpg'
import thumbnailAIChatAgent from '../img/thumbnails/thumbnail-ai-chat-agent.PNG'
import thumbnailFullAuthSPA from '../img/thumbnails/thumbnail-full-auth-spa.PNG'
import {PopupboxManager, PopupboxContainer} from 'react-popupbox'
import "react-popupbox/dist/react-popupbox.css"
import './MyWork.css'

function MyWork() {
    const {theme} = useTheme();

    const [offsetY, setOffsetY] = useState()
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

     // PROJECT 1
    const openPopup1 = () => {
        const content = (
            <>
                <img className="img-popupbox" src={thumbnailZarosenStore} alt="Zarosen online store" />
                <p className="project-desc">
                    A full-stak online store website with optimal responsive design, filter (categories, size, color), state management for front-end; 
                    log-in, log-out functions, send and store data (user info, product info) to database, payment with Stripe for back-end.
                </p>
                <p className="project-desc">
                    - Front-end: React, Redux, styled-components.
                </p>
                <p className="project-desc">
                    - Back-end: ExpressJS, NodeJs, MongoDB.
                </p>
                <p className="project-desc project-desc-special">
                    To be updated: admin panel to for product CRUD operation, user data management.
                </p>
                <b>Github: </b>
                    <a 
                        className="hyper-link" 
                        onClick={() => window.open("https://github.com/liamdoan/zarosen-store-to-push")}
                    >
                        https://github.com/liamdoan/zarosen-store-to-push
                    </a>
                <br/>
                <b>Live demo: </b>
                <a 
                    className="hyper-link" 
                    onClick={() => window.open("https://zarosen-store-to-push-frontend.vercel.app/")}
                >
                    https://zarosen-store-to-push-frontend.vercel.app/
                </a>
            </>
        )
        PopupboxManager.open({content})
    };

    const configProject1 = {
        titleBar: {
            enable: true,
            text: "",
        },
        fadeIn: true,
        fadeinSpeed: 500
    };
 
    // PROJECT 2
    const openPopup2 = () => {
        const content = (
            <>
                <img className="img-popupbox" src={thumbnailCabBooking} alt="Splash cab booking" />
                <p className="project-desc">
                    Inspired from SLUSH 2024. A beta version of Splash cab booking app built with NextJS, Tailwind, MongoDB for database, and MapLibre for map interaction. 
                    <p>Traveling route, price calculation are handled and displayed after user's selection. 
                    This project is initially for private event, which is suitable for organization having their own cars/cabs to transport guests and attendees.</p>
                </p>
                <p className="project-desc">Rides are filtered by day, sorted by soonest-latest time order.</p>
                <p className="project-desc">Users can see booking form. Drivers/admins can see driver view, where detail of rides are displayed.</p>
                <p className="project-desc">
                    - Front-end: Next.JS, Tailwind, MapLibre.
                </p>
                <p className="project-desc">
                    - Back-end: Next.JS, MongoDB.
                </p>
                <p className="project-desc project-desc-special">
                    To be updated: admin panel to display and collect all data, analysis.
                </p>
                <b>Github: </b>
                    <a 
                        className="hyper-link" 
                        onClick={() => window.open("https://github.com/liamdoan/taxi-booking")}
                    >
                        https://github.com/liamdoan/taxi-booking
                    </a>
                <br/>
                <b>Live demo: </b>
                <a 
                    className="hyper-link" 
                    onClick={() => window.open("https://splash-cab-booking.vercel.app/")}
                >
                    https://splash-cab-booking.vercel.app/
                </a>
            </>
        )
        PopupboxManager.open({content})
    };

    const configProject2 = {
        titleBar: {
            enable: true,
            text: "",
        },
        fadeIn: true,
        fadeinSpeed: 500
    };

     // PROJECT 3
    const openPopup3 = () => { 
        const content = (
            <>
                <img className="img-popupbox" src={thumbnailFullAuthSPA} alt="Full Auth SPA" />
                <p className="project-desc">
                    SPA with full authentication-authorization, 3-tier Role-Based Access Control (RBAC), profile management.
                    <p>This combines <a href="https://github.com/liamdoan/react-MERN-auth-module" target="_blank" rel="noopener noreferrer">Full-auth model</a>, <a href="https://github.com/liamdoan/todo_app_mern" target="_blank" rel="noopener noreferrer">SPA projects</a> and OAuth 2.0 protocol, allowing manual or Google-account sign up.</p>
                </p>
                <p className="project-desc">
                    - Stack: React.JS, ExpressJS, NodeJS, MongoDB, JWT, OAuth 2.0.
                </p>
                <p className="project-desc">
                    - Database: MySQL/MongoDB.
                </p>
                <p className="project-desc">
                    - Testing: Jest for unit testing, Cypress for end-to-end (E2E) testing.
                </p>
                <b>Github: </b>
                <br />
                <span className='sub-span'>- with mySQL database: </span>
                <a
                    className="hyper-link"
                    onClick={() => window.open("https://github.com/liamdoan/todo_app_mysql_ern")}
                >
                    https://github.com/liamdoan/todo_app_mysql_ern
                </a>
                <br />
                <span className='sub-span'>- with MongoDB database: </span>
                <a
                    className="hyper-link"
                    onClick={() => window.open("https://github.com/liamdoan/MERN-auth-SPA")}
                >
                    https://github.com/liamdoan/MERN-auth-SPA
                </a>
                <br/>
                <b>Live demo: </b>
                <a 
                    className="hyper-link" 
                    onClick={() => window.open("https://mern-auth-spa-frontend.vercel.app/")}
                >
                    https://mern-auth-spa-frontend.vercel.app/
                </a>
            </>
        )
        PopupboxManager.open({content})
    };

    const configProject3 = {
        titleBar: {
            enable: true,
            text: "",
        },
        fadeIn: true,
        fadeinSpeed: 500
    };

    // PROJECT 4
    const openPopup4 = () => {
        const content = (
            <>
                <img className="img-popupbox" src={thumbnailAIChatAgent} alt="Ai Chat Agent" />
                <p className="project-desc">
                    Build a modern conversational AI interface with Gemini 2.0 Flash model via API, support text and images 
                    prompts. 
                    <p>The robust interaction includes: streaming response, conversational context/history, error retry 
                    attempt, prompt handling.</p>
                    <p>
                        (integrating with <a href="https://github.com/liamdoan/react-MERN-auth-module" target="_blank" rel="noopener noreferrer">Full-auth model</a> for user authentication is in process ...)
                    </p>
                </p>
                <p className="project-desc">
                    - AI Integration: Google Gemini 2.0 Flash.
                </p>
                <p className="project-desc">
                    - Front-end: ReactJS.
                </p>
                <p className="project-desc">
                    - Back-end: NodeJS, Express, MongoDB.
                </p>                
                <p className="project-desc project-desc-special">
                    To be updated: Project roadmap includes integration with RAG (retrieval-augmented Generation).
                </p>
                <b>Github: </b>
                <a 
                    className="hyper-link" 
                    onClick={() => window.open("https://github.com/liamdoan/ai-chat-agent")}
                >
                    https://github.com/liamdoan/ai-chat-agent
                </a>
                <br/>
                <b>Live demo: </b>
                <a 
                    className="hyper-link" 
                    onClick={() => window.open("https://ai-chat-agent-frontend.vercel.app/")}
                >
                    https://ai-chat-agent-frontend.vercel.app/
                </a>
            </>
        )
        PopupboxManager.open({content})
    };

    const configProject4 = {
        titleBar: {
            enable: true,
            text: "",
        },
        fadeIn: true,
        fadeinSpeed: 500
    };

    return ( 
        <div id="portfolio" className={`cards ${theme}`}>
            {/* <div className="mywork-content"> */}
            <h1
                className="head-line"
                style={{transform: `translateY(${offsetY * 0.09}px)`}}
            >
                Projects
            </h1>
            <p
                className="sub-head-line"
                style={{transform: `translateY(${offsetY * 0.15}px)`}}
            >
                (and more projects are coming ...)
            </p>
            <div className="cards-container">
                <div className="cards-wrapper" >
                    <ul className="cards-items"
                        // style={{transform: `translateY(${offsetY * 0.05}px)`}}
                    >
                            <MyWorkCardItem 
                                onClick={openPopup4}
                                src={thumbnailAIChatAgent}
                                text="AI Gemini-power multimodal chat agent"
                                label="ReactJS, NodeJS, Express, MongoDB, Vite, Google Gemini 20 Flash"
                                path="/services"
                                number="4"
                            /> 
                            <MyWorkCardItem 
                                onClick={openPopup3}
                                src={thumbnailFullAuthSPA}
                                text="Full Authentication-Authorization SPA with OAuth2.0"
                                label="ReactJS, NodeJS, Express, MongoDB, JWT, OAuth 2.0"
                                path="/services"
                                number="3"
                            />
                            <MyWorkCardItem 
                                onClick={openPopup2}
                                src={thumbnailCabBooking}
                                text="SPLASH Cab Booking"
                                label="Next.JS, MongoDB, MapLibre"
                                path="/services"
                                number="2"
                            />
                            <MyWorkCardItem
                                onClick={openPopup1}
                                src={thumbnailZarosenStore}
                                text="ZAROSEN Fashion Store Website"
                                label="ReactJS, NodeJS, Express, MongoDB"
                                path="/services"
                                number="1"
                            />
                    </ul>
                    {/* <ul className="cards-items"
                        // more projects to be added here
                    </ul> */}
                </div>
            </div>
            <PopupboxContainer {...configProject1}/>
            <PopupboxContainer {...configProject2}/>
            <PopupboxContainer {...configProject3}/>
            <PopupboxContainer {...configProject4}/>
        </div>
    )
}

export default MyWork
