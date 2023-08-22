import React from 'react'
import { FeaturesStyles } from '../styles/components/FeaturesStyles'
import hit1 from '../../assets/images/hit1.png'
import hiticon1 from '../../assets/images/hiticon1.png'
import hiticon2 from '../../assets/images/hiticon2.png'
import hiticon3 from '../../assets/images/hiticon3.jpg'
import hiticon4 from '../../assets/images/hiticon4.jpg'
const HowItWorks = () => {
    return (
        <FeaturesStyles>
            <header>
                <h1>How It Works</h1>
                <div>Step-by-Step Learning Made Simple</div>
            </header>
            <div className='content-how-it-works'>
                <div className="row">
                    <div className="col-md-6 right">
                        <img src={hit1} alt="" />
                    </div>
                    <div className="col-md-6">

                        <div className="card mb-3">
                            <div className="card-body">
                                <div>
                                    <img src={hiticon1} alt="" />
                                </div>
                                <div>
                                    <h5>Browse Courses</h5>
                                    Explore our diverse course library and choose from various vocational disciplines and skill levels.
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="card-body">
                                <div>
                                    <img src={hiticon2} alt="" />
                                </div>
                                <div>
                                    <h5>Enroll</h5>
                                    Select your desired course, complete enrollment, and gain instant access to course materials and the Skillio community.
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <div className="card-body">
                                <div>
                                    <img src={hiticon3} alt="" />
                                </div>
                                <div>
                                    Learn and get certified: Dive into video tutorials, project-based assignments, and interactive learning activities. Successfully complete the course, earn your certificate, and celebrate your achievements!
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3">
                            <div className="card-body">
                                <div>
                                    <img src={hiticon4} alt="" />
                                </div>
                                <div>
                                    Get Tranning and Access Loan: Learn from a business expert how to set up a successful business, Get loan approved. Start a business!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FeaturesStyles>
    )
}

export default HowItWorks