import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/errors/NotFound";
import SignIn from "./pages/auth/SignIn";
import GuestLayout from "./pages/layouts/GuestLayout";
import Index from "./pages/Index";
import Layout from "./component/Layouts/Layout";
import Dashboard from "./pages/MainContent/Dashboard/Dashboard";
import RaffleStake from "./pages/MainContent/RaffleStake/RaffleStake";
import Wallet from "./pages/MainContent/Wallet/Wallet";

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
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
])

export default router