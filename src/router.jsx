import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/errors/NotFound";
import SignIn from "./pages/auth/SignIn";
import GuestLayout from "./pages/layouts/GuestLayout";
import Index from "./pages/Index";
import Layout from "./component/Layouts/Layout";
import Dashboard from "./pages/layouts/MainContent/Dashboard/Dashboard";
import RaffleStake from "./pages/layouts/MainContent/RaffleStake/RaffleStake";
import WinningTags from "./pages/layouts/MainContent/WinningTags/WinningTags";
import EditWinningTags from "./pages/layouts/MainContent/WinningTags/EditWinningTags";
import StartADraw from "./pages/layouts/MainContent/StartADraw/startADraw";
import ActiveRaffleDraws from "./pages/layouts/MainContent/StartADraw/ActiveRaffleDraws";
import BankAccounts from "./pages/layouts/BankAccounts/BankAccounts";
import ProtectedRoute from "./components/ProtectedRoute";
import CustomerTransactions from "./pages/Layouts/MainContent/CustomerTransactions/CustomerTransactions";
import Customers from "./pages/Layouts/MainContent/Customers/Customers";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Index />,
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <SignIn />,
            },
        ],
    },
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Layout />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />

            },
            {
                path: "/raffle-stakes",
                element: <RaffleStake />

            },
            {
                path: "/raffle-draws",
                element: <ActiveRaffleDraws />

            },
            {
                path: "/winning-tags",
                element: <WinningTags />
            },
            {
                path: "/winning-tag/edit/:id",
                element: <EditWinningTags />

            },
            {
                path: "/start-a-draw",
                element: <StartADraw />

            },
            {
                path: "/customers",
                element: <Customers />

            },
            {
                path: "/customer/transactions",
                element: <CustomerTransactions />

            },
            {
                path: "/payment-by-credit",
                element: <BankAccounts />

            },
            {
                path: "/wallet",
                element: <BankAccounts />

            }
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
])

export default router