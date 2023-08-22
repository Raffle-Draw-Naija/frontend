import React from 'react'
import { HeroStyles } from "../styles/components/HeroStyles"
import { LinkStyle } from '../styles/components/LinkStyle'
import HeroImage from '../../assets/images/hero.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>

            <HeroStyles style={sectionStyle}>
                <div className='hero-content'>
                    <h1 className='hero'>
                        <span>GATEWAY TO </span>
                        <span>BECOME A</span>
                        <span>CERTIFIED</span>
                        <span>PROFESSIONAL</span>
                    </h1>
                    <div className='second-layer'>
                        <span>Learn and master in-demand vocational skills </span>
                        <span>
                            from industry experts and become your own boss.
                        </span>
                    </div>
                    <LinkStyle>
                        <Link to="">
                            Get Started
                        </Link>
                    </LinkStyle>
                </div>
            </HeroStyles>

        </div>

    )
}

var sectionStyle = {
    width: "100%",
    height: "600px",
    backgroundImage: 'url(' + require('../../assets/images/hero.png') + ')',
    backgroundSize: "1600px 550px",
    backgroundRepeat: "no-repeat"
};
export default Hero