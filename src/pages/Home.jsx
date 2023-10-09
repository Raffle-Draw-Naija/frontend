import React from 'react'
import logo from '../assets/Icon/raffleLogo.png'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const delay = 3000

        const timeOut = setTimeout(() => {
            navigate('/dashboard/home')
        }, delay)

        return () => {
            clearTimeout(timeOut)
        }
    }, [navigate])

    return (
        <div
            style={{
                width: '100%',
                height: '100dvh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'cnter',
            }}
        >
            <img
                src={logo}
                alt="raffle9ja"
                style={{ width: '100px', height: '100px', margin: 'auto' }}
            />
        </div>
    )
}

export default Home
