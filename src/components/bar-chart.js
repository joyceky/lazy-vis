import React from 'react';
import { BarChart, Bar, Tooltip, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';

// All data will need to be sorted by driver

// This is a functional component rather than a class component
const BarChartComponent = ({orders}) => {

  var currentDateRange = [];
  var ordersPerDay = makeGraphSeedData(2, 2017);
  console.log("Result of makeGraphSeedData(): ", ordersPerDay);
  var sortedOrders = sortData(orders, 'orderCreatedAt');
  console.log("Result of sortedOrders(): ", sortedOrders);
  ordersPerDay = monthlyOrders(ordersPerDay, sortedOrders);
  console.log("Result of monthlyOrders(): ", ordersPerDay);

/*
  Creates an oject with a numerical key for every day of the chosen month
  Day is optional
  NOTE: Refactor to get current month and year
*/
  function makeGraphSeedData(month, year, day) {
    var graphSeedData = [];

    var daysInMonth = new Date(year, month, day || 0).getDate();

    for (var i = 1; i <= daysInMonth; i++) {
      graphSeedData[i] =
      {
        orders: ["grog"],
        tipTotal: 0,
      };
    }

    return graphSeedData;
  }


  function sortData(dataToSort, keyToSortOn) {
    var sortedData = null;

    sortedData = dataToSort.sort(function(a,b){
      return new Date(b.keyToSortOn) - new Date(a.keyToSortOn);
    });

    sortedData.reverse();

    return sortedData;
  }


  function monthlyOrders(graphSeedData, sortedData) {
    for (var i = 1; i <= Object.keys(graphSeedData).length; i++) {

      graphSeedData[i].orders = sortedData.filter((order) => {
        var date = new Date(parseInt(order.orderCreatedAt));

        if (date.getDate() == i) return true;
      });
    }
    return graphSeedData;
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
