// React components generate html which is added to the dropdown-menu
// React Library knows how to render components
// ReactDOM knows how to create components
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import fetchOrders from './actions/index'
import BarChartComponent from './components/bar-chart';
import LineChartComponent from './components/line-chart';
import PieChartComponent from './components/pie-chart';
import ComposedChartComponent from './components/composed-chart';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

// This function creates the App level component, which is a class component
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
    };
    // Making a request to lazybuffs for order data
    const URL = 'https://lazybuffs.herokuapp.com/dispatch/charts-data';
    const request = axios.get(URL)
    request.then((response) => {
      // must give this data to the components
      // should this api call be happening in an action?
      this.setState({ orders: response.data });
    });

  }

  // <select>
  //   <option value='0'>January</option>
  // </select>
  //
  // <buttton>Gen Report</button>

// format data here and pass to appropriate chart component
  formatData(orders) {

    const days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

    const cleanData = days.map((day) => {
      const daysOrders = orders.filter((order) => {
        if ( new Date(parseInt(order.orderCreatedAt)).getDate() === day) return true;
      });

      const total = daysOrders.reduce((curr, nextOrder) => {
        return curr + parseFloat(nextOrder.orderSubTotal);
      }, 0);

      const tips = daysOrders.reduce((curr, nextOrder) => {
        return curr + parseFloat(nextOrder.orderTip);
      }, 0);

      return { date: day, total, tips, orders: daysOrders.length };
    });

    return cleanData;
  }

  render() {

    return (
      <div>

        <BarChartComponent orders={this.formatData(this.state.orders)} />
        <LineChartComponent />
        <PieChartComponent />
        <ComposedChartComponent />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchOrders }, dispatch);
}

// Elements must be instantiated (an instance of them created) to render
// Use < /> self closing tag to instantiate
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
