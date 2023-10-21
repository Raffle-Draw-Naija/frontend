import { createBrowserRouter } from "react-router-dom";
// Errors
import NotFound from "./pages/errors/NotFound";

// Layouts
import GuestLayout from "./pages/layouts/GuestLayout";
import Layout from "./pages/layouts/AppLayout/Layout";

// Auth
import SignIn from "./pages/auth/SignIn";

// Other Pages
import Index from "./pages/Index";
import Dashboard from "./pages/MainContent/Dashboard/Dashboard";
import RaffleStake from "./pages/MainContent/RaffleStake/RaffleStake";
import Wallet from "./pages/MainContent/Wallet/Wallet";
import WinningTags from "./pages/MainContent/WinningTags/WinningTags";
import EditWinningTags from "./pages/MainContent/WinningTags/EditWinningTags";
import StartADraw from "./pages/MainContent/StartADraw/startADraw";
// import { ToastContainer, toast } from 'react-toastify';
import ActiveRaffleDraws from "./pages/MainContent/StartADraw/ActiveRaffleDraws";
import BankAccounts from "./pages/MainContent/BankAccounts/BankAccounts";


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
		element: <Layout />,
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
				path: "/wallet",
				element: <Wallet />
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
				path: "/bank-accounts",
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