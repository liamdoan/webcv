import React from 'react'
import './Portfolio.css'
import project1 from "../img/project-1.JPG"
import project2 from "../img/project-2.JPG"
import project3 from "../img/project-3.JPG"
import project4 from "../img/project-4.JPG"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import {PopupboxManager, PopupboxContainer} from 'react-popupbox'
import "react-popupbox/dist/react-popupbox.css"

const Portfolio = () => {

    // Project 1
    const openPopup1 = () => {
        const content = (
            <>
            <img className="img-popupbox" src={project1} alt="HFW1" />
            <p>Helsinki Fashion Week 2018 at Öljysäiliö 468 with models from Finland, Russia, Estonia and Sweden.</p>
            <b>Instagram:</b> <a className="hyper-link" 
                                onClick={() => window.open("https://instagram.com")}>https://instagram.com</a>
            </>
        )
    PopupboxManager.open({content})
};

    const configProject1 = {
        titleBar: {
            enable: true,
            text: "Helsinki Fashion Week 2018",
        },
        fadeIn: true,
        fadeinSpeed: 500
    };


    // Project 2
    const openPopup2 = () => {
        const content = (
            <>
            <img className="img-popupbox" src={project2} alt="Street1" />
            <p>Tampere city by night through my lens.</p>
            <b>Instagram:</b> <a className="hyper-link" 
                                onClick={() => window.open("https://instagram.com")}>https://instagram.com</a>
            </>
        )
    PopupboxManager.open({content})
};

    const configProject2 = {
        titleBar: {
            enable: true,
            text: " Tampere by night",
        },
        fadeIn: true,
        fadeinSpeed: 500
    };


    // Project 3
    const openPopup3 = () => {
        const content = (
            <>
            <img className="img-popupbox" src={project3} alt="HFW2" />
            <p>Helsinki Fashion Week 2019 with models from Finland, Lithuania and Sweden.</p>
            <b>Instagram:</b> <a className="hyper-link" 
                                onClick={() => window.open("https://instagram.com")}>https://instagram.com</a>
            </>
        )
    PopupboxManager.open({content})
;}

    const configProject3 = {
        titleBar: {
            enable: true,
            text: "Helsinki Fashion Week 2019",
        },
        fadeIn: true,
        fadeinSpeed: 500
    };
 

    // Project 4
    const openPopup4 = () => {
        const content = (
            <>
            <img className="img-popupbox" src={project4} alt="Street2" />
            <p>The breath of Tampere city in Finland's Independence Day</p>
            <b>Instagram:</b> <a className="hyper-link" 
                                onClick={() => window.open("https://instagram.com")}>https://instagram.com</a>
            </>
        )
    PopupboxManager.open({content})
};

    const configProject4 = {
        titleBar: {
            enable: true,
            text: "Tampere in Finland's Independence Day",
        },
        fadeIn: true,
        fadeinSpeed: 500
    }; 



    return (
        <div id="portfolio" className="portfolio-wrap">
            <h1 className="text-uppercase text-center pb-5">
                Portfolio
            </h1>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className=" col-lg-3 col-md-6 col-sm-6">
                        <div className="img-box" onClick={openPopup1}>
                            <img className="portfolio-img" src={project1} alt="HFW1" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="port-icon" icon ={faSearchPlus} />
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="img-box" onClick={openPopup2}>
                            <img className="portfolio-img" src={project2} alt="street1" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="port-icon" icon ={faSearchPlus} />
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="img-box" onClick={openPopup3}>
                            <img className="portfolio-img" src={project3} alt="HFW2" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="port-icon" icon ={faSearchPlus} />
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="img-box" onClick={openPopup4}>
                            <img className="portfolio-img" src={project4} alt="street2" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="port-icon" icon ={faSearchPlus} />
                        </div>
                    </div>
                </div>
            </div>
            <PopupboxContainer {...configProject1}/>
            <PopupboxContainer {...configProject2}/>
            <PopupboxContainer {...configProject3}/>
            <PopupboxContainer {...configProject4}/>
        </div>
    )
}

export default Portfolio
