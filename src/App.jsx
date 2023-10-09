import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './component/Dashboard/Dashboard'
import Home from './pages/Home'
import DashboardHome from './pages/DashboardHome/DashboardHome'
import RaffleStake from './component/DashboardRoute/RaffleStake/RaffleStake'
import StakePrice from './component/DashboardRoute/StakePrice/StakePrice'
import Settings from './component/DashboardRoute/Settings/Settings'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
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
