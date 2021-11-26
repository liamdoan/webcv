import React from 'react'
import CarouselSection from "./CarouselSection"
import './Testimonials.css'

const Testimonials = () => {
    return (
        <div id='clients' className="testimonials">
            <h1>My clients</h1>
            <div className="container">
                <div className="testimonials-content">
                    <CarouselSection/>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
