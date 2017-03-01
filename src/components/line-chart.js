import React from 'react';
import { LineChart, Line, Tooltip, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';


// This is a functional component rather than a class component
const LineChartComponent = () => {

  return (
    <div style={lineChartStyle}>
      <h4>Line Chart</h4>

      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="orders" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="day" />
        <YAxis />
      </LineChart>
    </div>
  );
};

const lineChartStyle = {
  width: '80%',
  // float: 'right',
  textAlign: 'center',
};

const data =
  [
    {
      day: 1,
      orders: 12
    },
    {
      day: 2,
      orders: 8
    },
    {
      day: 3,
      orders: 32
    },
    {
      day: 4,
      orders: 9
    },
    {
      day: 5,
      orders: 17
    },
    {
      day: 6,
      orders: 12
    },
    {
      day: 7,
      orders: 4
    }
  ];

export default LineChartComponent;
