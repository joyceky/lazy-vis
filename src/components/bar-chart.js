import React from 'react';
import { BarChart, Bar, Tooltip, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';


// This is a functional component rather than a class component
const BarChartComponent = ({orders}) => {

  // const orders = props.orders;
  console.log("Orders from Bar Charts: ", orders);
  console.log("Orders Length: ", orders.length);

  var currentDateRange = [];
  var date1 = new Date('2017-01-01');
  var date2 = new Date('2017-02-01');

  getDateRange(date1, date2);

  function getDateRange(dateStart, dateEnd) {
    if (orders) {
      for (var i = 0; i < orders.length; i++) {
        if (orders[i].orderCreatedAt !== null && orders[i].orderCreatedAt !== undefined) {
          console.log("time", time);
                console.log("date1", Date.parse(dateStart));
                console.log("date2", Date.parse(dateEnd));
          let  time = orders[i].orderCreatedAt;
          if (time >= Date.parse(dateStart) && time <= Date.parse(dateEnd)) {

            currentDateRange.push(orders[i]);
          }
          else {
            continue;
          }
        }
      }
      console.log(currentDateRange, currentDateRange.length, "here");
    }
  }




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
