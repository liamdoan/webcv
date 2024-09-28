import React from 'react'
import './Experience.css'

// future develop with data mappings
const Experience = () => {
    return (
        <div id="experience" className="experience"> 
           <div className="d-flex justify-content-center experience-header">
                <h1>Experience</h1>
           </div> 
           <div className="container experience-wrap">
            {/* WORK 3 */}
            <div className="timeline-block timeline-block-left">
                    <div className="marker">
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
                                Oversee frontend development across multiple platforms for company’s legacy product.
                            </li>
                        </div>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">
                                Implement new, scalable, maintainable features and UI/UX from designers for 
                                TypeScript-based React projects, which directly contributes to increased product sales.
                            </li>
                        </div>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">
                                Refactor, maintain existing ReactJS codebases to improve performance, accessibility and 
                                scalability, aiming to better readability, simplify future enhancement and facilitate easier 
                                maintenance.
                            </li>
                        </div>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">
                                Integrate React project as an NPM package into existing applications.
                            </li>
                        </div> 
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">
                                Develop new independent React project from NPM package to be used across products 
                                and customers’ platforms, deeply focusing on project’s modular design and reusability.
                            </li>
                        </div>
                        <div className="list-info">
                            <li className="dot">
                            </li>
                            <li className="li-info">
                                Maintain, add features, fix existing bugs for legacy Online Video Platform with EmberJS 
                                and FreeMarker Template FTL for frontend and backend.
                            </li>
                        </div>
                    </div>
                </div>
               {/* WORK 2 */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker">
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
