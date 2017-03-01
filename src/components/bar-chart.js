import React from 'react';
import { BarChart, Bar, Tooltip, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';

const BarChartComponent = ({orders, dataKey}) => {

  return (
      <div style={barChartStyle}>
        <h4>{dataKey} Chart</h4>
        <BarChart width={1100} height={500} data={orders}>
          <XAxis dataKey="date" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar type="monotone" dataKey={dataKey} fill="#8884d8" barSize={30} />
        </BarChart>
      </div>
  );
};

const barChartStyle = {
  width: '80%',
  textAlign: 'center'
};

export default BarChartComponent;
