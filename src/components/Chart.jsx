import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";  

import { Line } from "react-chartjs-2";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend 
);

export const options = {
    responsive: true,
    tension: 0.3,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Your Expenses"
        }
    }
};

const labels = [
    "Jan", 
    "Feb", 
    "Mar", 
    "Apr", 
    "May", 
    "Jun", 
    "Jul", 
    "Aug", 
    "Sept", 
    "Oct", 
    "Nov", 
    "Dec"
];

export const data = {
    labels,
    datasets: [
        {
            label: "Amount of Money to Spent",
            data: [40000, 60000, 30000, 40000, 50000, 60000, 30000, 60000, 70000, 80000, 90000, 100000],
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        }
    ]
};

export default function App() {
    return (
        <div className="App">
            <Line options={options} data={data} />
        </div>
    );
}
