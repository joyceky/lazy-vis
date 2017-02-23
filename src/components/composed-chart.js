import React from 'react';
import {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const ComposedChartComponent = React.createClass({
  	render () {
    	return (
        <div style={composedChartStyle}>
          <h4>Composed Chart</h4>

        	<ComposedChart width={600} height={400} data={data} >
              <XAxis dataKey="name" label="Days"/>
              <YAxis label="Index"/>
              <Tooltip/>
              <Legend/>
              <CartesianGrid stroke='#f5f5f5'/>
              <Area type='monotone' dataKey='wait' fill='#8884d8' stroke='#8884d8'/>
              <Bar dataKey='orders' barSize={20} fill='#413ea0'/>
              <Line type='monotone' dataKey='revenue' stroke='#ff7300'/>
           </ComposedChart>
         </div>
      );
    }
  })

const composedChartStyle = {
  width: '40%',
  float: 'right',
  textAlign: 'center',
};

const data = [{name: 'Day 1', revenue: 590, orders: 800, wait: 400},
              {name: 'Day 2', revenue: 868, orders: 967, wait: 80},
              {name: 'Day 3', revenue: 1397, orders: 1098, wait: 800},
              {name: 'Day 4', revenue: 1480, orders: 1200, wait: 122},
              {name: 'Day 5', revenue: 1520, orders: 1108, wait: 600},
              {name: 'Day 6', revenue: 1400, orders: 680, wait: 700}];


export default ComposedChartComponent;
