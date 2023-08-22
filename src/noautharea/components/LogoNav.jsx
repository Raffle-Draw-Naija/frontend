import React from 'react'
import { Button } from "../styles/components/Button"
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo1.jpg'

const LogoNav = () => {
    return (
        <div className='logo-nav'>
            <div>
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div style={{ paddingTop: "1rem" }} className='left'>
                <Link to="">
                    Get Started
                </Link>
            </div>
        </div>
    )
}

export default LogoNav