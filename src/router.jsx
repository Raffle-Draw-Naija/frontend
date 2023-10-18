import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/errors/NotFound";
import SignIn from "./pages/auth/SignIn";
import GuestLayout from "./pages/layouts/GuestLayout";
import Index from "./pages/Index";
import Layout from "./component/Layouts/Layout";
import Dashboard from "./pages/layouts/MainContent/Dashboard/Dashboard";
import RaffleStake from "./pages/layouts/MainContent/RaffleStake/RaffleStake";

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
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
])

export default router