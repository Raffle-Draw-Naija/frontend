import React from 'react'
import Aside from '../../layout/Aside/Aside'
import './Dashboard.scss'
// import MainContent from '../../layout/MainContent/MainContent'
import { Outlet } from 'react-router-dom'

const Dashboard = ({ children }) => {
    return (
        <div className="dashboard">
            <Aside />
            {/* <Outlet /> */}
            <div className="dashboard-content">{children}</div>
        </div>
    )
}

export default Dashboard
