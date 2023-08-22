import React from 'react'
import { FeaturesStyles } from '../styles/components/FeaturesStyles'
import biz_train from '../../assets/images/biz_train.png'
import feature_course from '../../assets/images/feature_course.png'
import feature_instructor from '../../assets/images/feature_instructor.png'
import project_certificate from '../../assets/images/project_certificate.png'
const Features = () => {
    return (
        <div className="features">

            <FeaturesStyles>
                <header>
                    <h1>Features</h1>
                    <div>Get Benefits when you learn with Skillio</div>
                </header>
                <div className='content'>
                    <div className="row">
                        <div className="col-md-3">
                            <div className='img'>
                                <img src={feature_instructor} alt="" />
                            </div>
                            <div>
                                Industry Expert Instructors.
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='img'>
                                <img src={project_certificate} alt="" />
                            </div>
                            <div>
                                project-based learning and Certification.
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='img'>
                                <img src={feature_course} alt="" />
                            </div>
                            <div>
                                Lifetime Access to Course Materials
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className='img'>
                                <img src={biz_train} alt="" />
                            </div>
                            <div>
                                Business Training & Loan
                            </div>
                        </div>
                    </div>
                </div>
            </FeaturesStyles>
        </div>

    )
}

export default Features