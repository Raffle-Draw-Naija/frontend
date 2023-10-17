import { createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/errors/NotFound";
import SignIn from "./pages/auth/SignIn";
import GuestLayout from "./pages/layouts/GuestLayout";
import Index from "./pages/Index";
import AppLayout from "./pages/layouts/AppLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
	},
    {
		path: "/",
		element: <AppLayout />,
		children: [],
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
		path: "*",
		element: <NotFound />,
	},
])

export default router