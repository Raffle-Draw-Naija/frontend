import React from 'react'
import Dashboard from '../../Dashboard/Dashboard'
import Navbar from '../../../pages/layouts/Navbar/Navbar'

const RaffleDraw = () => {
    return (
        <Dashboard>
            <div className="relative top-[90px] left-0">
                <Navbar />
                <h1>Raffle Draw</h1>
            </div>
        </Dashboard>
    )
}

export default RaffleDraw
