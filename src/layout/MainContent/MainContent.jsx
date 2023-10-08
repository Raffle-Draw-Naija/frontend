import React from 'react'
import './MainContent.scss'
import { Routes, Route } from 'react-router-dom'
import DashboardHome from '../../pages/DashboardHome'
import RaffleStake from '../../component/Dashboard/DashboardChildren/RaffleStake/RaffleStake'

const MainContent = () => {
    return (
        <div className="main-content">
            <Routes>
                <Route path="/dashboard/home" element={<DashboardHome />} />
                <Route
                    path="/dashboard/raffleStake"
                    element={<RaffleStake />}
                />
            </Routes>
        </div>
    )
}

export default MainContent
