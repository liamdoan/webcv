import React from 'react'
import { useTheme } from '../context/ThemeContext'
import DBLogo from '../img/logo/logo-dream-broker.jpg'
import WitviewLogo from '../img/logo/logo-witviewio.jpeg'
import HamkLogo from '../img/logo/logo-hamk.jpg'
import './Experience.css'

// future develop with data mappings
const Experience = () => {
    const {theme} = useTheme();

    return (
        <div id="experience" className={`experience ${theme}`}>
           <div className="d-flex justify-content-center experience-header">
                <h1>Experiences</h1>
           </div> 
           <div className="container experience-wrap">
            {/* WORK 3 */}
            <div className="timeline-block timeline-block-left">
                    <div className="marker">
                        <img src={DBLogo} alt="dream-broker" className='marker-dream-broker'/>
                    </div>
                    <div className={`timeline-content-wrap ${theme}`}>
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
                                    Oversee frontend development for the core Dream Broker Studio product across 4 platforms in an agile 
                                    environment, including 1 legacy system (EmberJS), 3 modern platforms (TypeScript, ReactJS). 
                                </li>
                            </div>
                            <div className="list-info">
                                <li className="dot">
                                </li>
                                <li className="li-info">
                                    Oversee frontend development in 1 React project which had impactful contribution on Q1 2024. 
                                </li>
                            </div>
                            <div className="list-info">
                                <li className="dot">
                                </li>
                                <li className="li-info">
                                    Develop a core, reusable React-based video player component library, shared across all products and 2+ 
                                    customers’ platform.
                                </li>
                            </div>
                            <div className="list-info">
                                <li className="dot">
                                </li>
                                <li className="li-info">
                                    Engage in code review process, follow SCRUM methodology. 
                                </li>
                            </div>
                            <div className="list-info">
                                <li className="dot">
                                </li>
                                <li className="li-info">
                                    My role extends to Microsoft SharePoint, where I develop SharePoint webpart to embed Dream Broker videos 
                                    using SPFx framework, and expand backend service with Java. 
                                </li>
                            </div>
                            <div className='skill-keywords-info'>
                                <span className='title-skill-keywords-info'>Skills: </span>
                                Linux, ReactJS, Vite, NodeJS, ExpressJS, Apache Ant, Modular Acrchitecture, EmberJS, FTL, VagrantVM, mySQL.
                            </div>
                        </div>
                    </div>
                </div>
               {/* WORK 2 */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker">
                        <img src={WitviewLogo} alt="witviewio" className='marker-witview'/>
                    </div>
                    <div className={`timeline-content-wrap ${theme}`}>
                        <div className="timeline-content"
                                data-aos='fade-left'
                                data-aos-duration="1000"
                                data-aos-once="true"
                                data-aos-delay='200'>
                            <h3>Data Manager, Witview Oy, Tampere</h3>
                            <p className="work-period">
                                May 2020 - November 2020
                            </p>
                            <p className="work-desc">
                                Witview startup helps clients archieve 7.5% uplift in conversion rate and some reach to 30%. The results were
                                based on extensive A/B testing performed with each customer. This position focused on: </p>
                            <div className="list-info">
                                <li className="dot">
                                </li>
                                <li className="li-info">Analyze and optimize data collection method for better customer experience.</li>
                            </div>
                            <div className="list-info">
                                <li className="dot">
                                </li>
                                <li className="li-info">Work closely with internal measuring tool and direct customer satisfaction audit, refine how data is gathered 
                                and interpreted. </li>

                            </div>
                            <div className="list-info">
                                <li className="dot">
                                </li>
                                <li className="li-info">Supervise and manage quality of incoming data, fix and report anomalies to ensure accuracy.</li>
                            </div>
                            <div className="list-info">
                                <li className="dot">
                                </li>
                                <li className="li-info">Mentor new trainees, create instruction materials to ensure smooth onboard and work adoption.</li>
                            </div>
                            <div className='skill-keywords-info'>
                                <span className='title-skill-keywords-info'>Skills: </span>
                                data collecting, reporting, brainstorming.
                            </div>
                        </div>
                    </div>
                </div>
                {/* WORK 1 */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker">
                        <img src={HamkLogo} alt="hamk" className='marker-hamk'/>
                    </div>
                    <div className={`timeline-content-wrap ${theme}`}>
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
                                As part of an academic team, we construct a proposal of a small-scale energy efficiency ecosystem for a public building, 
                                aiming to research the ability to integrate solar power with other renewable energy resources. This bridges the gap 
                                between research and practical application: 
                            </p>
                            <div className="list-info">
                                <li className="dot">
                                </li>
                                <div className="li-and-sub-info">
                                    <li className="li-info">Design UI prototype to display energy data, make insights more accessible and user-friendly.</li>
                                    {/*<li className="sub-li-info">Front End Development Libraries, <span className="secondary-text">May 2021</span></li>*/}
                                </div>
                            </div>
                            <div className="list-info">
                                <li className="dot">
                                </li>
                                <li className="li-info">
                                    Collaborate in a team of 4, directly discuss with professor. This experience strengthens my ability to conduct 
                                    technical research, communicate findings, and contribute to sustainable energy solutions.
                                </li>
                            </div>
                            <div className='skill-keywords-info'>
                                <span className='title-skill-keywords-info'>Skills: </span>
                                UI designing, researching, data analyzing.
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    )
}

export default Experience
