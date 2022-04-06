import React, { useState } from "react";

const UsingStatePractice = ({}) => {
  const [counter, setCounter] = useState(0);

  // events using state
  // call the state function "setCounter()"
  // pass in the state variable that holds the state value
  // add or subtract from the variable to create the add or subtract function
  // assign the "subtract" and "add" functions to the onClick={} on the button tags

  const subtract = () => {
    setCounter(counter - 1);
    console.log("subtract");
  };

  const add = () => {
    setCounter(counter + 1);
    console.log("add");
  };
  return (
    <div>
      <h1>useState Practice</h1>
      <div>
        <button onClick={subtract}>-</button>
        <h1>{counter}</h1>
        <button onClick={add}>+</button>
      </div>
    </div>
  );
};

export default UsingStatePractice;
