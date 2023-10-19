import { createBrowserRouter } from 'react-router-dom'
import NotFound from './pages/errors/NotFound'
import SignIn from './pages/auth/SignIn'
import GuestLayout from './pages/layouts/GuestLayout'
import Index from './pages/Index'
import AppLayout from './pages/layouts/AppLayout'
import Home from './pages/Home'
import DashboardHome from './pages/DashboardHome/DashboardHome'
import Dashboard from './component/Dashboard/Dashboard'
import RaffleStake from './component/DashboardRoute/RaffleStake/RaffleStake'
import StakePrice from './component/DashboardRoute/StakePrice/StakePrice'
import Settings from './component/DashboardRoute/Settings/Settings'

const remoteRoutes = [
    {
        path: '/index',
        element: <Index />,
    },
    {
        path: '/app',
        element: <AppLayout />,
        children: [],
    },
    {
        path: '/g',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <SignIn />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
    },
]

const localRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
    {
        path: '/dashboard/home',
        element: (
            <Dashboard>
                <DashboardHome />
            </Dashboard>
        ),
    },
    {
        path: '/dashboard/raffleStake',
        element: <RaffleStake />,
    },
    {
        path: '/dashboard/stakePrice',
        element: <StakePrice />,
    },
    {
        path: '/dashboard/settings',
        element: <Settings />,
    },
]

const mergedRoutes = [...remoteRoutes, ...localRoutes]

const router = createBrowserRouter(mergedRoutes)

export default router
