import React from 'react';
import { BarChart, Bar, Tooltip, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';

// All data will need to be sorted by driver

// This is a functional component rather than a class component
const BarChartComponent = ({orders}) => {

  var currentDateRange = [];
  var ordersPerDay = makeGraphSeedData(2, 2017);
  // console.log("Result of makeGraphSeedData(): ", ordersPerDay);
  var sortedOrders = sortData(orders, 'orderCreatedAt');
  // console.log("Result of sortedOrders(): ", sortedOrders);
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
        numOrders: 0,
        date: i,
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
      graphSeedData[i].numOrders = graphSeedData[i].orders.length;
      graphSeedData[i].tipTotal = sum(graphSeedData[i].orders, "orderTip");
    }
    return graphSeedData;
  }

  function sum (items, prop) {
      if (items == null) {
          return 0;
      }
      return items.reduce(function (a, b) {
          return b[prop] == null ? parseFloat(a) : parseFloat(a) + parseFloat(b[prop]);
      }, 0);
  };

  return (
    <div>
      <div style={barChartStyle}>
        <h4>Orders Chart</h4>
        <BarChart width={1100} height={500} data={ordersPerDay}>
          <XAxis dataKey="date" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar type="monotone" dataKey="numOrders" fill="#8884d8" barSize={30} />
        </BarChart>
      </div>

      <div style={barChartStyle}>
        <h4>Tips Chart</h4>
        <BarChart width={1100} height={500} data={ordersPerDay}>
          <XAxis dataKey="date" stroke="#8884d8" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Bar type="monotone" dataKey="tipTotal" fill="#0fb150" barSize={30} />
        </BarChart>
      </div>
    </div>
  );
};

const barChartStyle = {
  width: '80%',
  textAlign: 'center'
};

export default BarChartComponent;
