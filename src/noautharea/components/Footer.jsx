import React from 'react'
import { FooterStyle } from 'noautharea/styles/components/FooterStyle'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <FooterStyle>
            <div className="footer">
                <div>
                    <h2>Become a trained expert and Skilled professional</h2>
                    <div className="register">
                        <Link to="">
                            Register Now
                        </Link>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div>Want to become an Instructor/Trainer?</div>
                        <div>
                            <Link to="">
                                Apply Here
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </FooterStyle>
    )
}

export default Footer