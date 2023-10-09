import React from 'react'
import './MainContent.scss'
import { Routes, Route } from 'react-router-dom'
import DashboardHome from '../../pages/DashboardHome/DashboardHome'
import RaffleStake from '../../component/DashboardChildren/RaffleStake/RaffleStake'
import Dashboard from '../../component/Dashboard/Dashboard'

const MainContent = () => {
    return (
        <Dashboard className="main-content">
            <h1>Hello world</h1>
        </Dashboard>
    )
}

export default MainContent
