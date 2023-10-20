import React from 'react'
import Dashboard from '../../Dashboard/Dashboard'
import Navbar from '../../../pages/layouts/Navbar/Navbar'

const Wallet = () => {
    return (
        <Dashboard>
            <div className="relative top-[90px] left-0">
                <Navbar />
                <h1>Wallet</h1>
            </div>
        </Dashboard>
    )
}

export default Wallet
