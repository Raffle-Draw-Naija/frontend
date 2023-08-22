import React from 'react'
import about_us from '../../assets/images/about_us.png';
import { AboutUsStyle } from 'noautharea/styles/components/AboutUsStyle';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const AboutUs = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="about-us">
            <AboutUsStyle>
                <div className="row">
                    <div className="col-md-6">
                        <img src={about_us} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="about-us-card">
                            <Slider {...settings}>
                                <div>
                                    <h3>About Us</h3>
                                    <div className='mb-3'>
                                        Skillio is your premier destination for practical handwork skills and creative learning. Our platform is designed to empower individuals in Africa and beyond, providing accessible and immersive training that unlocks your full potential in becoming your own boss. Learn from skilled professionals who share their expertise, guiding you through step-by-step tutorials and hands-on projects.
                                        <br />
                                        Unlock Your Creativity, Learn and Master Practical Skills with Expert Guidance. Join Our Supportive Community Today! Start Your Learning Journey Now.
                                    </div>
                                </div>
                                <div>

                                    <h3>Vision</h3>
                                    <div className='mb-3'>
                                        To be recognised as a trusted and reputable source of high-quality craft skills and handwork education, set industry standards, and inspire individuals to unleash their creativity and achieve mastery in their chosen craft.
                                    </div>
                                </div>
                                <div>
                                    <h3>Mission</h3>
                                    <div>
                                        To democratise craft skills and handwork education, breaking down barriers of time, location, and affordability, while enabling individuals to develop practical skills that enhance their personal and professional lives.
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </AboutUsStyle>
        </div>
    )
}

export default AboutUs