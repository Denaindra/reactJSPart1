import React, { Component } from "react";
import Counter from "./Counter";

const Counters = (props) => {
  const { OnDeleteCounter, InCreaseCount, ResetValue } = props;
  return (
    <div>
      <button
        onClick={() => ResetValue}
        className="btn btn-secondary btn-sm m-2"
      >
        Reset
      </button>
      {props.counter.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={OnDeleteCounter}
          counter={counter}
          InCreaseCount={InCreaseCount}
        />
      ))}
    </div>
  );
};

export default Counters;
