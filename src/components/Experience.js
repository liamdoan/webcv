import React from 'react'
import './Experience.css'

const Experience = () => {
    return (
        <div id="experience" className="experience"> 
           <div className="d-flex justify-content-center experience-header">
                <h1>Experience</h1>
           </div> 
           <div className="container experience-wrap">
               {/* WORK 2 */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker">
                    </div>
                    <div className="timeline-content" 
                            data-aos='fade-left' 
                            data-aos-duration="1000"
                            data-aos-once="true"
                            data-aos-delay='200'>
                        <h3>Data Manager at Witvew Oy, Tampere</h3>
                        <p className="work-period">
                            May 2020 - November 2020
                        </p>
                        <p className="work-desc">The role helped Witview’s 
                        customers witness 7.5% uplift in conversion rate and some reach to 30%. The results were
                        based on extensive A/B testing performed with each customer. This position focused on: </p>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">managing & sanitizing the collected data</li>
                        </div>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">developing methods of collecting and utilizing new data from customers' behaviour</li>

                        </div>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">supervising and managing quality of data</li>

                        </div>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">creating instruction material and guiding new trainees</li>
                        </div> 
                    </div>
                </div>
                {/* WORK 1 */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker">  
                    </div>
                    <div className="timeline-content"
                            data-aos='fade-right'
                            data-aos-duration="1000"
                            data-aos-once="true"
                            data-aos-delay='400'>
                        <h3>Bachelor of Electrical and Automation Engineering, HAMK University of Applied Sciences, Valkeakoski</h3>
                        <p className="work-period">
                            2016 - current
                        </p>
                        <p className="work-desc">
                            Backgrounded and acquired knowledge of smart technology and automation process. Some noticeable achievements during study time can include:
                        </p>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <div className="li-and-sub-info">
                                <li className="li-info">freeCodeCamp:</li>
                                <li className="sub-li-info">Front End Development Libraries, <span className="secondary-text">May 2021</span></li>
                                <li className="sub-li-info">JavaScript Algorithms and Data Structures, <span className="secondary-text">April 2021</span></li>
                                <li className="sub-li-info">Responsive Web Design, <span className="secondary-text">March 2021</span></li>
                            </div>
                        </div>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">Front-end Developer - <span className="secondary-text">LUT University - Fitech.io, February 2021</span></li>
                        </div>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">Energy Efficient Ecosystem - <span className="secondary-text">HAMK Tech Reseach Unit, August 2018</span></li>
                        </div>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">Innovation Challenges - <span className="secondary-text">University of Tampere, December 2019</span></li>
                        </div> 
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">Elements of AI - <span className="secondary-text">University of Helsinki, July 2018</span></li>
                        </div> 
                    </div>
                </div>
                {/* <div className="timeline-block timeline-block-right">
                    <div className="marker">

                    </div>
                    <div className="timeline-content">
                        <h3>2016-2017</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corrupti placeat ipsa! Itaque laborum assumenda voluptatem incidunt, optio aperiam eaque soluta atque provident consectetur placeat exercitationem nihil veritatis tempore similique sed commodi saepe accusamus. Vel nam numquam laudantium est soluta.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker">

                    </div>
                    <div className="timeline-content">
                        <h3>2017-2018</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corrupti placeat ipsa! Itaque laborum assumenda voluptatem incidunt, optio aperiam eaque soluta atque provident consectetur placeat exercitationem nihil veritatis tempore similique sed commodi saepe accusamus. Vel nam numquam laudantium est soluta.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-right">
                    <div className="marker">

                    </div>
                    <div className="timeline-content">
                        <h3>2018-2019</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corrupti placeat ipsa! Itaque laborum assumenda voluptatem incidunt, optio aperiam eaque soluta atque provident consectetur placeat exercitationem nihil veritatis tempore similique sed commodi saepe accusamus. Vel nam numquam laudantium est soluta.</p>
                    </div>
                </div>
                <div className="timeline-block timeline-block-left">
                    <div className="marker">

                    </div>
                    <div className="timeline-content">
                        <h3>2019-2020</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio corrupti placeat ipsa! Itaque laborum assumenda voluptatem incidunt, optio aperiam eaque soluta atque provident consectetur placeat exercitationem nihil veritatis tempore similique sed commodi saepe accusamus. Vel nam numquam laudantium est soluta.</p>
                    </div>
                </div> */}
            </div>    
        </div>
    )
}

export default Experience
