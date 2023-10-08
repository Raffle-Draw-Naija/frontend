import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './component/Dashboard/Dashboard'
import Home from './pages/Home'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/dashboard/*" element={<Dashboard />} />
            </Routes>
        </Router>
    )
}

export default App
