import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './component/Dashboard/Layout'
import Home from './pages/Home'
import SignIn from "./pages/auth/SignIn";
import DashboardHome from './pages/layouts/MainContent/Dashboard/Dashboard'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route
                    exact
                    path="/dashboard/home"
                    element={
                        <Dashboard>
                            <DashboardHome />
                        </Dashboard>
                    }
                />
            </Routes>
        </Router>
    )
}

export default App
