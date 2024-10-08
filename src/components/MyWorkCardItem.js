import React from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import { useEffect } from 'react';
import 'aos/dist/aos.css';


function MyWorkCardItem(props) { 

    useEffect(() => {
        Aos.init({})
      }, []) 
  
    return (
        <>
            <div className="cards-item"
                data-aos='zoom-in'
                data-aos-duration="1000"
                // data-aos-once="true"
                data-aos-delay="200"
                onClick={props.onClick}
                to={props.path} 
                >
                    <div className="number">
                         {props.number}
                    </div>
                    <div className="overlay">
                    </div>
                <div className="cards-item-link">
                    <figure className="cards-item-pic-wrap" data-category={props.label}>
                       <img src={props.src} alt="Project image" 
                           className="cards-item-img" />
                    </figure>

                    <div className="cards-item-info">
                        <h5 className="cards-item-text">
                           {props.text}
                        </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyWorkCardItem
