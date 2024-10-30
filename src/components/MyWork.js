import React, {useState, useEffect} from 'react'
import { useTheme } from '../context/ThemeContext'
import MyWorkCardItem from './MyWorkCardItem'
import thumbnailZarosenStore from '../img/thumbnails/thumbnail-zarosen.jpg'
import thumbnailTechConsultant from '../img/thumbnails/thumbnail-tech-consultant.jpg'
import thumbnailRestaurant from '../img/thumbnails/thumbnail-restaurant.jpg'
import thumbnailPhotoService from '../img/thumbnails/thumbnail-photo-service.JPG'
import thumbnailTodoApp from '../img/thumbnails/thumbnail-todo-app.jpg'
import thumbnailFoodRecipeApp from '../img/thumbnails/thumbnail-food-recipe.JPG'
import thumbnailWeatherApp from '../img/thumbnails/thumbnail-weather-app.jpg'
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

    // -----------------------------Project 1 
    const openPopup1 = () => {
        const content = (
            <>
                <img className="img-popupbox" src={thumbnailWeatherApp} alt="weather-app" />
                <p className="project-desc">
                    A weather app built with React, using API fetching with the ability to change background based on certain temperature.
                </p>
                <b>Github: </b>
                    <a
                        className="hyper-link" 
                        onClick={() => window.open("https://github.com/liamdoan/weather_app")}>https://github.com/liamdoan/weather_app
                    </a>
                <br/>
                <b>Live demo: </b>
                    <a
                        className="hyper-link" 
                        onClick={() => window.open("https://liamdoan.github.io/weather_app/")}>https://liamdoan.github.io/weather_app/
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

    // -----------------------------Project 2 
    const openPopup2 = () => {
        const content = (
            <>
                <img className="img-popupbox" src={thumbnailFoodRecipeApp} alt="food-recipes-app" />
                <p className="project-desc">
                    A food recipes app built with React focused on API fetching,  instant filtering function and 3D effect design.
                </p>
                <b>Github: </b>
                    <a
                        className="hyper-link" 
                        onClick={() => window.open("https://github.com/liamdoan/food_recipe_3d_design")}>https://github.com/liamdoan/food_recipe_3d_design
                    </a>
                <br/>
                <b>Live demo: </b>
                    <a 
                        className="hyper-link" 
                        onClick={() => window.open("https://liamdoan.github.io/food_recipe_3d_design/")}>https://liamdoan.github.io/food_recipe_3d_design/
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

     // -----------------------------Project 3 
    const openPopup3 = () => {
        const content = (
            <>
                <img className="img-popupbox" src={thumbnailTechConsultant} alt="ABC-consultancy" />
                <p className="project-desc">
                    Mockup of a Green Tech consultacy website built with React and styled-components. The focus of this project
                    is on layout design, pattern animation, transparent navigation bar, the ability to change the theme of patterns with inline functions and to re-use data for 
                    multiple components without hardcoding.
                </p>
                <b>Github: </b>
                    <a 
                        className="hyper-link" 
                        onClick={() => window.open("https://github.com/liamdoan/ABC_green_tech")}>https://github.com/liamdoan/ABC_green_tech
                    </a>
                <br/>
                <b>Live demo: </b>
                    <a 
                        className="hyper-link" 
                        onClick={() => window.open("https://liamdoan.github.io/ABC_green_tech")}>https://liamdoan.github.io/ABC_green_tech
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

    // -------------------------------------Project 4
    const openPopup4 = () => {
        const content = (
            <>
                <img className="img-popupbox" src={thumbnailPhotoService} alt="ABC-photography" />
                <p className="project-desc">
                    Mockup of a photography service website built with React, which is focused on reusable button component with inline functions, 
                    grid layout, card info design and footer layout.
                </p>
                <b>Github: </b>
                <a 
                    className="hyper-link" 
                    onClick={() => window.open("https://github.com/liamdoan/visual-services")}>https://github.com/liamdoan/visual-services
                </a>
                <br/>
                <b>Live demo: </b>
                    <a 
                        className="hyper-link" 
                        onClick={() => window.open("https://liamdoan.github.io/visual-services/")}>https://liamdoan.github.io/visual-services/
                    </a>
            </>
        )
    PopupboxManager.open({content})
;}

    const configProject4 = {
        titleBar: {
            enable: true,
            text: "",
        },
        fadeIn: true,
        fadeinSpeed: 500
    };
 
    // ------------------------------------Project 5
    const openPopup5 = () => {
        const content = (
            <>
                <img className="img-popupbox" src={thumbnailRestaurant} alt="ABC-restaurant" />
                <p className="project-desc">
                    Mockup of a high-end restaurant website built with React and styled components, 
                    which is focused on passing data to similar components to avoid hard-code, grid designing and smooth scroll function.
                </p>
                <b>Github: </b>
                    <a className="hyper-link" 
                        onClick={() => window.open("https://github.com/liamdoan/highend_restaurant")}>https://github.com/liamdoan/highend_restaurant
                    </a>
                <br/>
                <b>Live demo: </b>
                    <a className="hyper-link" 
                        onClick={() => window.open("https://liamdoan.github.io/highend_restaurant")}>https://liamdoan.github.io/highend_restaurant
                    </a>
            </>
        )
    PopupboxManager.open({content})
};

    const configProject5 = {
        titleBar: {
            enable: true,
            text: "",
        },
        fadeIn: true,
        fadeinSpeed: 500
    };

     // -----------------------------Project 6
     const openPopup6 = () => { 
        const content = (
            <>
                <img className="img-popupbox" src={thumbnailTodoApp} alt="todo-webapp" />
                <p className="project-desc">
                    A fullstack to-do app with CRUD functions,
                    and auto-generating different colors for different task lines. ESLint and Prettier are used to enforce coding standards and format.
                </p>
                <p className="project-desc">
                    - Frontend: React.
                </p>
                <p className="project-desc">
                    - Backend: ExpressJS, NodeJS, MongoDB.
                </p>
                <p className="project-desc">
                    - Testing: Jest for unit testing, Cypress for end-to-end (E2E) testing.
                </p>
                <p className="project-desc project-desc-special">
                    Future applying and expanding: control/admin panel for other projects.
                </p>
                <b>Github: </b>
                    <a
                        className="hyper-link" 
                        onClick={() => window.open("https://github.com/liamdoan/todo_app_mern")}>https://github.com/liamdoan/todo_app_mern
                    </a>
                <br/>
                <b>Live demo: </b>
                    <a 
                        className="hyper-link" 
                        onClick={() => window.open("https://todo-app-mern-frontendld.vercel.app/")}>https://todo-app-mern-frontendld.vercel.app/
                    </a>
            </>
        )
    PopupboxManager.open({content})
};

    const configProject6 = {
        titleBar: {
            enable: true,
            text: "",
        },
        fadeIn: true,
        fadeinSpeed: 500
    };

     // -----------------------------Project 7
     const openPopup7 = () => {
        const content = (
            <>
                <img className="img-popupbox" src={thumbnailZarosenStore} alt="Zarosen-online-store" />
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
                        onClick={() => window.open("https://github.com/liamdoan/zarosen-store-full-stack")}>https://github.com/liamdoan/zarosen-store-full-stack
                    </a>
                <br/>
                <b>Live demo: </b>
                    <a 
                        className="hyper-link" 
                        onClick={() => window.open("https://zarosen-store-to-push-frontend.vercel.app/")}>https://zarosen-store-to-push-frontend.vercel.app/
                    </a>
            </>
        )
    PopupboxManager.open({content})
};

    const configProject7 = {
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
            <h1 className="head-line"
                style={{transform: `translateY(${offsetY * 0.09}px)`}}
                    >Striving for the best UX/UI</h1>
            <p className="sub-head-line"
                style={{transform: `translateY(${offsetY * 0.15}px)`}}
                    >(and more projects are coming ...)</p>
            <div className="cards-container">
                <div className="cards-wrapper" >
                    <ul className="cards-items"
                        // style={{transform: `translateY(${offsetY * 0.05}px)`}}
                    >
                            <MyWorkCardItem 
                                onClick={openPopup7}
                                src={thumbnailZarosenStore}
                                text="ZAROSEN Fashion Store Website"
                                label="React/ NodeJS/ ExpressJS/ MongoDB"
                                path="/services"
                                number="7"
                                /> 
                            <MyWorkCardItem 
                                onClick={openPopup6}
                                src={thumbnailTodoApp}
                                text="To-do Web App"
                                label="MERN/ Jest/ Cypress"
                                path="/services"
                                number="6"
                                /> 
                            <MyWorkCardItem
                                onClick={openPopup5}
                                src={thumbnailRestaurant}
                                text="ABC Highend Restaurant Website"
                                label="React"
                                path="/services"
                                number="5"
                                />
                    </ul>
                    <ul className="cards-items"
                        // style={{transform: `translateY(${offsetY * 0.05}px)`}}
                                >
                            <MyWorkCardItem
                                onClick={openPopup4}
                                src={thumbnailPhotoService}
                                text="ABC Photography Service Website"
                                label="React" 
                                path="/services"
                                number="4"
                                />
                            <MyWorkCardItem 
                                onClick={openPopup3}
                                src={thumbnailTechConsultant}
                                text="ABC GreenTech Consultancy Website"
                                label="React"
                                path="/services"
                                number="3"
                                /> 
                            <MyWorkCardItem
                                onClick={openPopup2}
                                src={thumbnailFoodRecipeApp}
                                text="Food Recipes App"
                                label="React"
                                path="/services"
                                number="2"
                                />
                            <MyWorkCardItem
                                onClick={openPopup1}
                                src={thumbnailWeatherApp}
                                text="Weather App"
                                label="React"
                                path="/services"
                                number="1"
                                />
                    </ul>
                </div>
                {/* </div> */}
            </div>
            <PopupboxContainer {...configProject1}/>
            <PopupboxContainer {...configProject2}/>
            <PopupboxContainer {...configProject3}/>
            <PopupboxContainer {...configProject4}/>
            <PopupboxContainer {...configProject5}/>
            <PopupboxContainer {...configProject6}/>
            <PopupboxContainer {...configProject7}/>
        </div>
    )
}

export default MyWork
