import React from 'react'
import './Aside.scss'
import Logo from '../../assets/Icon/raffleLogo.png'
import { FiHome } from 'react-icons/fi'
import { BsTicketPerforated } from 'react-icons/bs'
import { BsClipboardMinus } from 'react-icons/bs'
import { RiSettingsLine } from 'react-icons/ri'
import { BiLogOutCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Aside = () => {
    return (
        <nav className="aside">
            <Link to="/dashboard/home" className="aside-logo">
                <img src={Logo} alt="raffle9ja" />
            </Link>
            <ul>
                <Link to="/dashboard/home" className="nav-link">
                    <FiHome />
                    Dashboard
                </Link>

                <Link to="/dashboard/raffle" className="nav-link">
                    <BsTicketPerforated />
                    Raffle Stake
                </Link>

                <Link to="/dashboard/stake" className="active nav-link">
                    <BsClipboardMinus />
                    Stake Price
                </Link>

                <Link to="/dashboard/settings" className="nav-link">
                    <RiSettingsLine />
                    Settings
                </Link>

                <Link href="/logout" className="logout nav-link">
                    <BiLogOutCircle />
                    Logout
                </Link>
            </ul>
        </nav>
    )
}

export default Aside
