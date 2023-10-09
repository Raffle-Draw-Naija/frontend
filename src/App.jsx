import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './component/Dashboard/Dashboard'
import Home from './pages/Home'
import DashboardHome from './pages/DashboardHome/DashboardHome'
import RaffleStake from './component/DashboardRoute/RaffleStake/RaffleStake'
import StakePrice from './component/DashboardRoute/StakePrice/StakePrice'

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
            </Routes>
        </Router>
    )
}

export default App
