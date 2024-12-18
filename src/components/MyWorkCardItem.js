import React from 'react'
import Aos from 'aos'
import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext'
import 'aos/dist/aos.css';

function MyWorkCardItem(props) {
    const {theme} = useTheme();

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
                    <div className={`overlay ${theme}`}></div>
                <div className={`cards-item-link ${theme}`}>
                    <figure className="cards-item-pic-wrap" data-category={props.label}>
                        <img
                            src={props.src}
                            alt="Project image"
                            className="cards-item-img"
                        />
                    </figure>
                    <div className="cards-item-info">
                        <h5 className={`cards-item-text ${theme}`}>
                           {props.text}
                        </h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyWorkCardItem;
