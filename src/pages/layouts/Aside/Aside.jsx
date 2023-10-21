import './Aside.scss'
import Logo from '../../../assets/Icon/raffleLogo.png'
import { FiHome } from 'react-icons/fi'
import { BsTicketPerforated } from 'react-icons/bs'
import { BsClipboardMinus } from 'react-icons/bs'
import { RiSettingsLine } from 'react-icons/ri'
import { BiLogOutCircle } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'

const Aside = () => {
    return (
        <nav className="aside">
            <NavLink to="/" className="aside-logo">
                <img src={Logo} alt="raffle9ja" />
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/dashboard" className="nav-link">
                        <FiHome />
                        Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/raffle-draws" className="nav-link">
                        <RiSettingsLine />
                        Active Raffle Draws
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/raffle-stakes" className="nav-link">
                        <BsTicketPerforated />
                        Raffle Stakes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/winning-tags" className="nav-link">
                        <RiSettingsLine />
                        Winning Tags
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/bank-accounts" className="nav-link">
                        <RiSettingsLine />
                        Bank Accounts
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/settings" className="nav-link">
                        <RiSettingsLine />
                        Settings
                    </NavLink>
                </li>

                <li>
                    <NavLink href="/logout" className="logout nav-link">
                        <BiLogOutCircle />
                        Logout
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Aside
