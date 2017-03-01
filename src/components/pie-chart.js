import React from 'react';
import { PieChart, Pie, Sector, Cell } from 'recharts';

const data = [{name: 'Monday', value: 200}, {name: 'Tuesday', value: 100},
                  {name: 'Wednesday', value: 300}, {name: 'Thursday', value: 200},
                  {name: 'Friday', value: 500}, {name: 'Saturday', value: 100},
                  {name: 'Sunday', value: 200}];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#09C49F', '#90C49F', '#00099F'];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartComponent = React.createClass({
	render () {
  	return (
      <div style={pieChartStyle}>
        <h4>Pie Chart</h4>

    	<PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          cx={300}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={180}
          fill="#8884d8"
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
      </div>

    );
}
})

const pieChartStyle = {
  width: '80%',
  // float: 'left',
  textAlign: 'center',
};

export default PieChartComponent;
