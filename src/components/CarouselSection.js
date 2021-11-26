import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import client1 from "../clients/client1.jpg"
import client2 from "../clients/client2.jpg"
import client3 from "../clients/client3.jpg"
import client4 from "../clients/client4.jpg"
import client5 from "../clients/client5.jpg"
import client6 from "../clients/client6.jpg"

const CarouselSection = () => {
    return (
        <Carousel
        // Get rid of small avatar
            showArrow={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoplay={true}
            interval={3000}
        >
            <>
                <img src={client1} alt="Regina" />
                <div className="carousel-info">
                    <h3>Regina</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nesciunt aliquid earum impedit repellendus doloribus.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsa quis natus fugit sunt ut doloremque non ipsum debitis. Vitae.</p>
                </div>
            </>
            <>
                <img src={client2} alt="Duong" />
                <div className="carousel-info">
                    <h3>Duong</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsa quis natus fugit sunt ut doloremque non ipsum debitis. Vitae.</p>
                </div>
            </>
            <>
                <img src={client3} alt="Quang" />
                <div className="carousel-info">
                    <h3>Quang</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsa quis natus fugit sunt ut doloremque non ipsum debitis. Vitae.</p>
                </div>
            </>
            <>
                <img src={client4} alt="Hoang" />
                <div className="carousel-info">
                    <h3>Hoang</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsa quis natus fugit sunt ut doloremque non ipsum debitis. Vitae.</p>
                </div>
            </>
            <>
                <img src={client5} alt="Hoanh" />
                <div className="carousel-info">
                    <h3>Hoanh</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsa quis natus fugit sunt ut doloremque non ipsum debitis. Vitae.</p>
                </div>
            </>
            <>
                <img src={client6} alt="Katelyn" />
                <div className="carousel-info">
                    <h3>Katelyn</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ipsa quis natus fugit sunt ut doloremque non ipsum debitis. Vitae.</p>
                </div>
            </>
        </Carousel>
    )
}

export default CarouselSection
