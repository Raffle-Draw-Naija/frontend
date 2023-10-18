import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './component/Dashboard/Layout'
import Home from './pages/Home'
import SignIn from "./pages/auth/SignIn";
import DashboardHome from './pages/DashboardHome/Dashboard'
import RaffleStake from './component/DashboardRoute/RaffleStake/RaffleStake'
import StakePrice from './component/DashboardRoute/StakePrice/StakePrice'
import Settings from './component/DashboardRoute/Settings/Settings'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route
                    exact
                    path="/dashboard/home"
                    element={
                        <Dashboard>
                            <DashboardHome />
                        </Dashboard>
                    }
                />
                <Route
                    path="/dashboard/raffleStake"
                    element={<RaffleStake />}
                />
                <Route path="/dashboard/stakePrice" element={<StakePrice />} />
                <Route path="/dashboard/settings" element={<Settings />} />
            </Routes>
        </Router>
    )
}

export default App
