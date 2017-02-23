// React components generate html which is added to the dropdown-menu
// React Library knows how to render components
// ReactDOM knows how to create components
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import BarChartComponent from './components/bar-chart';
import LineChartComponent from './components/line-chart';
import PieChartComponent from './components/pie-chart';
import ComposedChartComponent from './components/composed-chart';

// This function creates the App level component, which is a class component
class App extends Component {
  constructor(props) {
    super(props);

  //   this.state = {
  //  };
  }

  render() {

    return (
      <div>
        <BarChartComponent />
        <LineChartComponent />
        <PieChartComponent />
        <ComposedChartComponent />
      </div>
    );
  }
}

// Elements must be instantiated (an instance of them created) to render
// Use < /> self closing tag to instantiate
ReactDOM.render(<App />, document.querySelector('.container'));

module.exports = {App};
