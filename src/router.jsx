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
import Login from "./pages/auth/Login";
import PendingWithdrawal from "./pages/Layouts/PendingWithdrawal";
import Agents from "./pages/Layouts/MainContent/Agents/Agents";
import AgentRaffleDraws from "./pages/Layouts/MainContent/AgentRaffleDraws/AgentRaffleDraws";
import AgentTransactions from "./pages/Layouts/MainContent/agentTransactions/AgentTransactions";
import AgentRaffles from "./pages/Layouts/MainContent/AgentRaffles/AgentRaffles";
import Withdrawal from "./pages/Layouts/MainContent/Withdrawal/Withdrawal";



const router = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />,
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
                path: "/agents",
                children: [
                    {
                        path: "",
                        element: <Agents />

                    },
                    {
                        path: "raffle-draws",
                        element: <AgentRaffleDraws />,
                    },

                    {
                        path: "transactions",
                        element: <AgentTransactions />,
                    },

                    {
                        path: "raffles",
                        element: <AgentRaffles />,
                    },

                ]

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
                path: "/start-a-raffle",
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
                path: "/customer/bank-accounts",
                element: <BankAccounts />

            },
            {
                path: "/customer/pending-withdrawals",
                element: <Withdrawal />

            }
        ],
    },
    {
        path: "*",
        element: <NotFound />,
    },
])

export default router