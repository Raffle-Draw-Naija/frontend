import React from 'react'
import { NavbarStyle } from "../styles/components/NavbarStyle"
import TopNav from './TopNav'
import LogoNav from './LogoNav'
const Navbar = () => {
    return (
        <>
            <NavbarStyle>
                <TopNav />
                <LogoNav />
            </NavbarStyle>
        </>
    )
}

export default Navbar