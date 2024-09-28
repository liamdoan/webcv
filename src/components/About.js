import React, {useState, useEffect} from 'react'
import CvPic from "../img/cvpic.png"
import './About.css'

const About = () => { 

    const [offsetY, setOffsetY] = useState()
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
  
    return (
        <div id="about" className="about">
                <div className="about-quote"
                style={{transform: `translateY(${offsetY * 0.095}px)`}}
                >
                    <h1 className="about-upper-quote">
                        “ever positive,
                    </h1>
                    <h1 className="about-lower-quote">
                        never negative„
                    </h1>
                </div>     
            <div className="row about-wrap">
                <div className="col-lg-6 col-xm-12">
                    <div className="picwrap mb-5"> 
                        <img className="cvpic" 
                            src={CvPic} 
                            alt="author" 
                            data-aos='fade-down'
                            data-aos-duration="500"
                            // data-aos-once="true"
                            data-aos-delay='100'/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12 about-text-wrap">
                    <h1 className="about-heading"
                        data-aos='fade-up'
                        data-aos-duration="1000"
                        // data-aos-once="true"
                        data-aos-delay='200'>Goal & orientation</h1>
                    <p className="about-text"
                        data-aos='fade-up'
                        data-aos-duration="700"
                        // data-aos-once="true"
                        data-aos-delay='400'>
                        Always target beyond the peak on the job, highly valued team-playing skills which will help in completing and taking future projects even further. I’m interested in modern digital platforms, very enthusiastic in making my learning curve always go upwards by getting experiences from my seniors as well as discussing with cross-competence colleagues to deliver the best impact on clients’ business.
                        <br />
                        <br />
                        My previous role to single-handedly oversee Frontend part in a talented team has given me a big chance to build user-friendly, robust, and scalable sites and solutions, work closely with backend engineers and UX/UI designers, which helps me learn and observe diverse viewpoints of potential technical aspects, as well as the initiative to look for new solutions, stay up to date with new technology trends, development, and specially the strong motivation to learn more.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
