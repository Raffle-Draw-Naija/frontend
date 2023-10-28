import DashboardChart from '../../../components/dashboard/DashboardChart'
import './DashboardHome.scss'

const Dashboard = () => {
    return (
        <div className="dashboard-home">
            <h1>Home</h1>

            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="col-span-1 shadow-lg">
                    <DashboardChart />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
