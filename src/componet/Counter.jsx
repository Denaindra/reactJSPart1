import React, { Component } from "react";

class Counter extends Component {
  render() {
    const {counter,InCreaseCount,onDelete} = this.props
    return (
      <div>
        <h1>{this.props.counter.id}</h1>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button
          onClick={() => InCreaseCount(counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter; // {value} read the specific varible from the cunter obj
    return value === 0 ? "Zero" : value;
  }
}




export default Counter;
