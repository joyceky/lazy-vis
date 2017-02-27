import React from 'react';
import { BarChart, Bar, Tooltip, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';


// This is a functional component rather than a class component
const BarChartComponent = ({orders}) => {

  // const orders = props.orders;
  // console.log("Orders from Bar Charts: ", orders);
  // console.log("Orders Length: ", orders.length);

  var currentDateRange = [];
  // var janOrders = [];
  var date1 = new Date('2017-01-01');
  var date2 = new Date('2017-02-01');

  getDateRange(date1, date2);




  function getDateRange(dateStart, dateEnd) {
    if (orders) {
      var janOrders = orders.filter((order) => {
        var date = new Date(parseInt(order.orderCreatedAt));

        if (date >= Date.parse(dateStart) && date <= Date.parse(dateEnd)) {
          return true;
        }
      });
    }
    console.log("Filtered Orders, Jan: ", janOrders.length, janOrders);

  }
    //
    //   for (var i = 0; i < currentDateRange.length; i++) {
    //     var date = new Date(parseInt(currentDateRange[i].orderCreatedAt));
    //     console.log((date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear());
      //   for (var i = 1; i < 31; i++) {
      //   if (date.getDate === i) {
      //     janOrders[i] = date;
      //   }
      //   // console.log(ToLocalDate(currentDateRange[i].orderCreatedAt));
      // }
    // }

// console.log("January Orders by Day: ", janOrders);

// Filter example, use to filter arrays without loops
// const daysOnTheFirst = currentDateRange.filter((order) => {
//   var date = new Date(parseInt(order.orderCreatedAt));
//
//   if (date.getDate() = 1) return true;
// });
//
//
//
//
//  function ToLocalDate (inDate) {
//    console.log(inDate);
//     var date = new Date();
//     date.setTime(inDate.valueOf() - 60000 * inDate.getTimezoneOffset());
//     return date;
// }




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
