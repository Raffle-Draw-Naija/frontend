import './Aside.scss'
import Logo from '../../../assets/Icon/raffleLogo.png'
import { BiLogOutCircle } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
import routes from './routes'

const Aside = () => {
    return (
        <nav className="aside">
            <NavLink to="/" className="aside-logo">
                <img src={Logo} alt="raffle9ja" />
            </NavLink>
            
            <ul>
                {routes.map(({route, Icon, label}) => (
                    <li key={route}>
                        <NavLink to={route} className="nav-link">
                            <Icon />
                            {label}
                        </NavLink>
                    </li>
                ))}

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
