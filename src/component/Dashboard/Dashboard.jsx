import React from 'react'
import Aside from '../../layout/Aside/Aside'
import './Dashboard.scss'
import MainContent from '../../layout/MainContent/MainContent'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Aside />
            <MainContent />
            <Outlet />
        </div>
    )
}

export default Dashboard
