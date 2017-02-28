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
  var ordersPerDay = getGraphSeedData(2, 2017);

  // var date1 = new Date('2017-01-2');
  // var date2 = new Date('2017-01-12');
  //
  // getDateRange(date1, date2);
  console.log("sorting log", sortData(orders, 'orderCreatedAt'));
  console.log(monthlyOrders(ordersPerDay, orders));
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
      // console.log(sortedData[i]);
      if (sortedData[i].orderCreatedAt) {
        // console.log(new Date(parseInt(sortedData[i].orderCreatedAt)));
      }
    }

    return sortedData;
  }

  function monthlyOrders(graphSeedData, sortedData) {
    // push data in to arrays at key value
    console.log("monthlyOrders");
    console.log("MO", graphSeedData, Object.keys(graphSeedData).length);
    console.log("MO", sortedData);

    for (var i = 1; i < Object.keys(graphSeedData).length; i++) {
      graphSeedData[i] = sortedData.filter((order) => {
        var date = new Date(parseInt(order.orderCreatedAt));

        if (date.getDate() == i) return true;
      });
      console.log(graphSeedData);
    }


    /*
    we need to get the tips for the day and add that value to the graphSeedData
----------------
    we need to loop through the sorted data array
    we only want to operate on the section in the search range
      we skip any values at the start of the loop that are not the search start date or greater
      and we need to terminate at the value the is greater than the search end date

      we need to count all the tips for the orders that occurred on that day
        create a temptip variable that will hold the tips for the day
        initialize to 0 before entering the loop and when the date changes

        create a var tempdate, and set to first date, and set the temptip = to thisOrder.tip
        if the tempdate == thisOrder.date : then add tip to temp var
        if the tempdate != thisOrder.date : add the temptip as the value to the previous day in the graphSeedData
                                    (as the tip values is for the prev day),
                                    clear the temptip, set the temptip equal to
                                    the tip for the current day (which is the new day)

        once the loop is done the graphSeedData should contain the data in a format
        for the graph

        use the graphSeedData and pass it into another function that will call the graph
    */
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
