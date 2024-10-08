import React from 'react'
import './Experience.css'
import DBLogo from '../img/logo/logo-dream-broker.jpg'
import WitviewLogo from '../img/logo/logo-witviewio.jpeg'
import HamkLogo from '../img/logo/logo-hamk.jpg'

// future develop with data mappings
const Experience = () => {
    return (
        <div id="experience" className="experience"> 
           <div className="d-flex justify-content-center experience-header">
                <h1>Experiences</h1>
           </div> 
           <div className="container experience-wrap">
            {/* WORK 3 */}
            <div className="timeline-block timeline-block-left">
                    <div className="marker">
                        <img src={DBLogo} alt="dream-broker" className='marker-dream-broker'/>
                    </div>
                    <div className="timeline-content" 
                            data-aos='fade-left' 
                            data-aos-duration="1000"
                            data-aos-once="true"
                            data-aos-delay='200'>
                        <h3>Software Engineer, Dream Broker Oy, Helsinki</h3>
                        <p className="work-period">
                            August 2022 - current
                        </p>
                        <p className="work-desc">Contribute to R&D department of Dream Broker Oy:</p>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">
                                Oversee Frontend development across legacy/modern platforms for company’s legacy OVP product.
                            </li>
                        </div>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">
                                Utilize TypeScript-based React stack to engineer new, scalable, maintainable solutions
                                and UI/UX from designers, directly contributing to increased product sales.
                            </li>
                        </div>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">
                                Engineer, build React library with Vite for high-efficiency.
                            </li>
                        </div>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">
                                Refactor, maintain ReactJS codebases, achieved significant improvement in
                                performance, accessibility (WCAG), scalability, aimed to better readability, simplify
                                future enhancement and facilitate easier maintenance.
                            </li>
                        </div>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">
                                Develop React library from company's own NPM package to be used across products and 
                                customers’ platforms, focusing on Modular Architecture, Reusability.
                            </li>
                        </div>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">
                                Maintain, add features, debug existing bugs for legacy Online Video Platform (OVP) with
                                EmberJS, FTL (FreeMarker Template), Apache Ant for frontend and backend.
                            </li>
                        </div>
                        <div className='skill-keywords-info'>
                            <span className='title-skill-keywords-info'>Skills: </span>
                            Linux, ReactJS, Vite, NodeJS, ExpressJS, Apache Ant, Modular Acrchitecture, EmberJS, FTL, VagrantVM, mySQL.
                        </div>
                    </div>
                </div>
               {/* WORK 2 */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker">
                        <img src={WitviewLogo} alt="witviewio" className='marker-witview'/>
                    </div>
                    <div className="timeline-content" 
                            data-aos='fade-left' 
                            data-aos-duration="1000"
                            data-aos-once="true"
                            data-aos-delay='200'>
                        <h3>Data Manager, Witview Oy, Tampere</h3>
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
                        <div className='skill-keywords-info'>
                            <span className='title-skill-keywords-info'>Skills: </span>
                            data collecting, reporting, brainstorming.
                        </div>
                    </div>
                </div>
                {/* WORK 1 */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker">
                        <img src={HamkLogo} alt="hamk" className='marker-hamk'/>
                    </div>
                    <div className="timeline-content"
                            data-aos='fade-right'
                            data-aos-duration="1000"
                            data-aos-once="true"
                            data-aos-delay='400'>
                        <h3>Researcher, HAMK Tech Research Unit, HAMK University of Applied Sciences</h3>
                        <p className="work-period">
                            August 2018 - January 2019
                        </p>
                        <p className="work-desc">
                            The goal is to construct a proposal of a small-scale energy efficiency ecosystem for a public building. The role focused on:
                        </p>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <div className="li-and-sub-info">
                                <li className="li-info">designing the prototype of user interface (UI) for displaying data</li>
                                {/*<li className="sub-li-info">Front End Development Libraries, <span className="secondary-text">May 2021</span></li>*/}
                            </div>
                        </div>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">researching the ability to integrate solar power with other renewable energy sources</li>
                        </div>
                        <div className='skill-keywords-info'>
                            <span className='title-skill-keywords-info'>Skills: </span>
                            UI designing, researching, data analyzing.
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Experience
