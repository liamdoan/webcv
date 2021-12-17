import React, {useState, useEffect} from 'react'
import CardItem from './CardItem'
import './MyWork.css'
import project1 from '../img/thumbnail1.jpg'
import project2 from '../img/thumbnail2.jpg'
import project3 from '../img/thumbnail3.JPG'
import project4 from '../img/thumbnail4.jpg'
import project5 from '../img/thumbnail5.JPG'
import project6 from '../img/thumbnail6.jpg'
import {PopupboxManager, PopupboxContainer} from 'react-popupbox'
import "react-popupbox/dist/react-popupbox.css"


function MyWork() {

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
            <img className="img-popupbox" src={project1} alt="ABCConsultancy" />
            <p className="project-desc">Mockup of a Green Tech consultacy website built with React and styled-components. The focus of this project
                 is on layout design, pattern animation, transparent navigation bar, the ability to change the theme of patterns with inline functions and to re-use data for 
                 multiple components without hardcoding.

            </p>
            <b>Github:</b> <a className="hyper-link" 
                                onClick={() => window.open("https://github.com/liamdoan/ABC_green_tech")}>https://github.com/liamdoan/ABC_green_tech</a>
            <br/>
            <b>Live demo:</b> <a className="hyper-link" 
                                onClick={() => window.open("https://liamdoan.github.io/ABC_green_tech")}>https://liamdoan.github.io/ABC_green_tech</a>
            </>
        )
    PopupboxManager.open({content})
};

    const configProject1 = {
        titleBar: {
            enable: true,
            text: "ABC GreenTech Consultancy",
        },
        fadeIn: true,
        fadeinSpeed: 500
    };


    // ------------------------------------Project 2
    const openPopup2 = () => {
        const content = (
            <>
            <img className="img-popupbox" src={project2} alt="ABCRestaurant" />
            <p className="project-desc">Mockup of a high-end restaurant website built with React and styled components, 
                which is focused on passing data to similar components to avoid hard-code, grid designing and smooth scroll function.
            </p>
            <b>Github:</b> <a className="hyper-link" 
                                onClick={() => window.open("https://github.com/liamdoan/highend_restaurant")}>https://github.com/liamdoan/highend_restaurant</a>
            <br/>
            <b>Live demo:</b> <a className="hyper-link" 
                                onClick={() => window.open("https://liamdoan.github.io/highend_restaurant")}>https://liamdoan.github.io/highend_restaurant</a>
            </>
        )
    PopupboxManager.open({content})
};

    const configProject2 = {
        titleBar: {
            enable: true,
            text: "ABC high-end restaurant",
        },
        fadeIn: true,
        fadeinSpeed: 500
    };


    // -------------------------------------Project 3
    const openPopup3 = () => {
        const content = (
            <>
            <img className="img-popupbox" src={project3} alt="ABCPhotography" />
            <p className="project-desc">Mockup of a photography service website built with React, which is focused on reusable button component with inline functions, 
                grid layout, card info design and footer layout.
            </p>
            <b>Github:</b> <a className="hyper-link" 
                                onClick={() => window.open("https://github.com/liamdoan/visual-services")}>https://github.com/liamdoan/visual-services</a>
            <br/>
            <b>Live demo:</b> <a className="hyper-link" 
                                onClick={() => window.open("https://liamdoan.github.io/visual-services/")}>https://liamdoan.github.io/visual-services/</a>
            </>
        )
    PopupboxManager.open({content})
;}

    const configProject3 = {
        titleBar: {
            enable: true,
            text: "ABC Photography Service",
        },
        fadeIn: true,
        fadeinSpeed: 500
    };
 

    // -----------------------------Project 4 
    const openPopup4 = () => { 
        const content = (
            <>
            <img className="img-popupbox" src={project4} alt="todo-webapp" />
            <p className="project-desc">A to-do web app with the ability to add tasks, edit tasks, delete tasks, completion-marked tasks 
                and auto-generate different colors for different task lines.
            </p>
            <b>Github:</b> <a className="hyper-link" 
                                onClick={() => window.open("https://github.com/liamdoan/todo_web_app")}>https://github.com/liamdoan/todo_web_app</a>
            <br/>
            <b>Live demo:</b> <a className="hyper-link" 
                                onClick={() => window.open("https://liamdoan.github.io/todo_web_app/")}>https://liamdoan.github.io/todo_web_app/</a>
            </>
        )
    PopupboxManager.open({content})
};

    const configProject4 = {
        titleBar: {
            enable: true,
            text: "To-do Web App",
        },
        fadeIn: true,
        fadeinSpeed: 500
    };     


    // -----------------------------Project 5 
    const openPopup5 = () => {
        const content = (
            <>
            <img className="img-popupbox" src={project5} alt="food-recipes-app" />
            <p className="project-desc">A food recipes app built with React focused on API fetching,  instant filtering function and 3D effect design.
            </p>
            <b>Github:</b> <a className="hyper-link" 
                                onClick={() => window.open("https://github.com/liamdoan/food_recipe_3d_design")}>https://github.com/liamdoan/food_recipe_3d_design</a>
            <br/>
            <b>Live demo:</b> <a className="hyper-link" 
                                onClick={() => window.open("https://liamdoan.github.io/food_recipe_3d_design/")}>https://liamdoan.github.io/food_recipe_3d_design/</a>
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
            <img className="img-popupbox" src={project6} alt="weather-app" />
            <p className="project-desc">A weather app built with React, using API fetching with the ability to change background based on certain temperature.
            </p>
            <b>Github:</b> <a className="hyper-link" 
                                onClick={() => window.open("https://github.com/liamdoan/weather_app")}>https://github.com/liamdoan/weather_app</a>
            <br/>
            <b>Live demo:</b> <a className="hyper-link" 
                                onClick={() => window.open("https://liamdoan.github.io/weather_app/")}>https://liamdoan.github.io/weather_app/</a>
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



    return ( 
        <div id="portfolio" className="cards">
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
                            <CardItem 
                                onClick={openPopup1}
                                src={project1}
                                text="ABC GreenTech Consultancy Website"
                                label="React"
                                path="/services"
                                number="1"
                                /> 
                            <CardItem
                                onClick={openPopup2}
                                src={project2}
                                text="ABC Highend Restaurant Website"
                                label="React"
                                path="/services"
                                number="2"
                                />
                            <CardItem
                                onClick={openPopup3}
                                src={project3}
                                text="ABC Photography Service Website"
                                label="React" 
                                path="/services"
                                number="3"
                                />
                    </ul>

                    <ul className="cards-items"
                        // style={{transform: `translateY(${offsetY * 0.05}px)`}}
                                >
                            
                            <CardItem 
                                onClick={openPopup4}
                                src={project4}
                                text="To-do Web App"
                                label="JavaScript/HTML/CSS"
                                path="/services"
                                number="4"
                                /> 
                            <CardItem
                                onClick={openPopup5}
                                src={project5}
                                text="Food Recipes App"
                                label="React"
                                path="/services"
                                number="5"
                                />
                            <CardItem
                                onClick={openPopup6}
                                src={project6}
                                text="Weather App"
                                label="React"
                                path="/services"
                                number="6"
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
        </div>
    )
}

export default MyWork
