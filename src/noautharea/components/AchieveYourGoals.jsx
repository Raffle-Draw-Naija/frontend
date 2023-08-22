import React from 'react'
import { LinkStyle } from '../styles/components/LinkStyle'
import { AchieveGoalsStyles } from '../styles/components/AchieveGoalsStyles'
import achieve_goals from '../../assets/images/achieve_goals.png';
import { Link } from 'react-router-dom';

const AchieveYourGoals = () => {
    return (
        <AchieveGoalsStyles>
            <div className="achieve-goals">
                <div className="row">
                    <div className="col-md-4 left">
                        <h3>Achieve Your Skill Development and Goals with Skillio</h3>
                        <div>
                            We are your trusted partner that takes you from no experience to an expert level.
                            <ul>
                                <li>Online learning and Live classes at weekends (Saturday and Sundays)</li>
                                <li>Product Showcase and Exhibition</li>
                                <li>Mentorship</li>
                            </ul>
                            <LinkStyle>
                                <Link to="/student/signup">
                                    Register
                                </Link>
                            </LinkStyle>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <img src={achieve_goals} alt="" />
                    </div>
                </div>
            </div>
        </AchieveGoalsStyles>
    )
}

export default AchieveYourGoals