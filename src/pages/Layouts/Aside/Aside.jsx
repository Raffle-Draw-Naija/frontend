import './Aside.scss'
import Logo from '../../../assets/Icon/raffleLogo.png'
import { FiHome } from 'react-icons/fi'
import { BsTicketPerforated } from 'react-icons/bs'
import { RiSettingsLine } from 'react-icons/ri'
import { BiLogOutCircle } from 'react-icons/bi'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../../redux/userSlice'

const Aside = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const navLogout = () => {
        dispatch(logout())
        localStorage.removeItem("_rtoken")
        localStorage.removeItem("_token")
        console.log('logout');
        navigate("/login")

    }
    return (
        <nav className="aside d-sm-block d-none d-sm-none d-md-block">
            <NavLink to="/" className="aside-logo">
                {/* <img src={Logo} alt="raffle9ja" /> */}
            </NavLink>
            <ul>
                <li>
                    <NavLink to="/dashboard" className="nav-link">
                        <FiHome />
                        Dashboard
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/agents" className="nav-link">
                        <RiSettingsLine />
                        Agents
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/agents/transactions" className="nav-link">
                        <RiSettingsLine />
                        Agent Trans.
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
                        Customer Raffles
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/winning-tags" className="nav-link">
                        <RiSettingsLine />
                        Winning Tags
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/customers" className="nav-link">
                        <RiSettingsLine />
                        Customers
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/customer/transactions" className="nav-link">
                        <RiSettingsLine />
                        Cust. Trans. History
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/customer/bank-accounts" className="nav-link">
                        <RiSettingsLine />
                        Bank Accounts
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/customer/pending-withdrawals" className="nav-link">
                        <RiSettingsLine />
                        Withdrawals
                    </NavLink>
                </li>

                <li>
                    <div onClick={navLogout} className="logout nav-link d-flex py-3 pl-3 gap-3">
                        <BiLogOutCircle />
                        <div>
                            Logout
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Aside
