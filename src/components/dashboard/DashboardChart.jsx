import { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
        title: {
            display: false,
            text: 'User Statistics',
        },
    },
}

const colors = [
    '#F3A8E2', '#FFD7A3',
    '#9747FF', '#FCA997',
    '#B91293', '#0000A5',
    '#FB4E22'
]

export default function DashboardChart() {
    const dataDomain = [
        {
            label: '5',
            count: 20,
        }, {
            label: '30',
            count: 5,
        }, {
            label: '67',
            count: 32,
        }, {
            label: '60',
            count: 12,
        }, {
            label: '36',
            count: 18,
        }, {
            label: '21',
            count: 28,
        }, {
            label: '12',
            count: 16,
        },
    ]

    // const [filter, setFilter] = useState('monthly')
    // const [loading, setLoading] = useState(false)
    const [chartData, setChartData] = useState(dataDomain)

    const labels = ['Tags']

    const getColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    const data = {
        labels,
        datasets: chartData.map(data => ({
            label: data.label,
            data: [data.count],
            backgroundColor: getColor()
        })),
    }

    return (
        <div className="rounded-2xl controlled-border controlled-bg p-4 w-full flex flex-col items-start gap-10 min-h-full max-h-screen">
            <div className="flex items-center justify-between self-stretch flex-wrap">
                {/* Left */}
                <span> Winning Tags </span>

                {/* Right */}
                <></>
            </div>
            <Bar options={options} data={data} />
        </div>
    )
}