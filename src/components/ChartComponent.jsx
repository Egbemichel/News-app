/* eslint-disable no-unused-vars */
// src/components/ChartComponent.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ChartComponent = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'News Data Trend',
        data: data.values,
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

ChartComponent.propTypes = {
  data: PropTypes.shape({
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
};

export default ChartComponent;
