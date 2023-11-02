import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const PieChart = ({ chartData }) => {
    return (
        <div>
            <Pie data={chartData} height="100px" />
        </div>
    )
}

export default PieChart