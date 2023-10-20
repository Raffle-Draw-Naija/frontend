import React from 'react'
import './StakePrice.scss'
import Dashboard from '../../Dashboard/Dashboard'
import Navbar from '../../../pages/layouts/Navbar/Navbar'

const StakePrice = () => {
    return (
        <Dashboard>
            <div className="stake-price relative top-[90px] left-0">
                <Navbar />
                <h1>Stake Price</h1>
            </div>
        </Dashboard>
    )
}

export default StakePrice
