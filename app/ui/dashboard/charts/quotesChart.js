import React from "react";
import { Line } from "react-chartjs-2";
import classes from "./charts.module.css";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register required components
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"], // X-axis labels
    datasets: [
      {
        label: "Split of Quotes Sent",
        data: [0.1, 0.5, 0.7, 0.3, 0.8], // Y-axis data
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Fill color
        borderWidth: 2, // Line width
        tension: 0.4, // Smooth curves
        pointRadius: 3, // Size of data points
        pointBackgroundColor: "rgba(75, 192, 192, 1)", // Data point color
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hides legend if you don't want it
      },
      title: {
        display: true,
        text: "Split of Quotes Sent",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 1,
        ticks: {
          stepSize: 0.1, // Y-axis intervals
        },
      },
      x: {
        grid: {
          display: false, // Hide vertical grid lines if necessary
        },
      },
    },
  };

  return (
    <div className={classes["container"]}>
      <Line className={classes["chart"]} data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
