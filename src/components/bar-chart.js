import React from 'react';
import { BarChart, Bar, Tooltip, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';


// This is a functional component rather than a class component
const BarChartComponent = () => {

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


  return (
    <div style={barChartStyle}>
      <h4>Bar Chart</h4>

      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="day" stroke="#8884d8" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar type="monotone" dataKey="orders" fill="#8884d8" barSize={30} />
      </BarChart>
    </div>
  );
};

const barChartStyle = {
  width: '40%',
  float: 'left',
  textAlign: 'center'
};

export default BarChartComponent;
