import React from 'react';
import { BarChart, Bar, Tooltip, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';

// This is a functional component rather than a class component
const BarChartComponent = ({orders}) => {

  // Filter example, use to filter arrays without loops
  // const daysOnTheFirst = currentDateRange.filter((order) => {
  //   var date = new Date(parseInt(order.orderCreatedAt));
  //
  //   if (date.getDate() = 1) return true;
  // });

  var currentDateRange = [];
  var ordersPerDay = {};

  var date1 = new Date('2017-01-02');
  var date2 = new Date('2017-01-03');

  getDateRange(date1, date2);

  console.log("get graph data", getGraphSeedData(2, 2016));
  console.log("sorting log", sortData(orders, 'orderCreatedAt'));

/*
- creates an object to hold graph data (graphSeedData)
- gets the number of days in the supplied month
- for 1 - the number of days, assign the key of
  graphSeedData to equal the date
- set value of that key to an object containing
  the date as a name and the value to the value
- return the graphSeedData object
*/
  function getGraphSeedData(month, year, day) {
    var graphSeedData = {};

    var daysInMonth = new Date(year, month, day || 0).getDate();

    for (var i = 1; i <= daysInMonth; i++) {

      var obj = {
        name: i.toString(),
        value: null
      };

      graphSeedData[i] = obj;
    }

    return graphSeedData;
  }

/*
 look up how to sort an array based on dates
*/
  function sortData(dataToSort, keyToSortOn) {
    var sortedData = null;

    // Sort the data here later
    sortedData = dataToSort.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b.keyToSortOn) - new Date(a.keyToSortOn);
    });

    sortedData.reverse();

    for (var i = 0; i < sortedData.length; i++) {
      console.log(sortedData[i]);
      if (sortedData[i].orderCreatedAt) {
        console.log(new Date(parseInt(sortedData[i].orderCreatedAt)));
      }
    }

    return sortedData;
  }







  function getDateRange(dateStart, dateEnd) {
    if (orders) {
      /*
      Create array with keys set
      call a function to do that. look at the object
      filter array based on date taken in
      in filter, access global object for dates

      */
      currentDateRange = orders.filter((order) => {
        var date = new Date(parseInt(order.orderCreatedAt));

        if (date >= Date.parse(dateStart) && date <= Date.parse(dateEnd)) {
          return true;
        }
      });


console.log("Filtered Orders, Date Range (Jan): ", currentDateRange.length, currentDateRange);

}
}

    //   var counter = 0;
    //
    //   for (var i = 1; i <= 31; i++) {
    //
    //   ordersPerDay[i] = orders.filter(function(order){
    //     console.log(order.orderCreatedAt);
    //     let orderedAt = new Date(parseInt(order.orderCreatedAt));
    //     console.log(i, orderedAt);
    //     counter++;
    //      return orderedAt.getMonth() === 1 && orderedAt.getDay() === i;
    //
    //     });
    // }
    // console.log( counter);
    // console.log("Orders Per Day Filtered: ", ordersPerDay, i);


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
