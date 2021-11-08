import logo from "../imges/logo.svg";
import React, { Component } from "react";
import "../css/App.css";
import NavigationBar from "./NavigationBar";
import Counters from "./Counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 42 },
    ],
  };

  InCreaseCount = (counter) => {
    const counters = [...this.state.counters];
    const indextOf = counters.indexOf(counter);
    counters[indextOf].value++;
    this.setState({ counters: counters });
  };

  OnDeleteCounter = (counterid) => {
    const counters = this.state.counters.filter((c) => c.id !== counterid);
    this.setState({ counters: counters });
  };

  ResetValue = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c; // this return new array without clone copy of array
    });
    this.setState({ counters: counters });
    console.log("hellow world");
  };

  render() {
    return (
      <React.Fragment>
        <NavigationBar Total={this.state.counters.length} />
        <div className="container">
          <Counters
            InCreaseCount={this.InCreaseCount}
            OnDeleteCounter={this.OnDeleteCounter}
            counter={this.state.counters}
            ResetValue={this.ResetValue}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
