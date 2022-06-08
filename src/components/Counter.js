import React, { useState, useEffect } from "react";

const Counter = ({}) => {
  const [count, setCount] = useState(0);
  let [counterTwo, setCounterTwo] = useState(0)

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    setCount(count - 1);
  };

  const addCounterTwo = () =>
  {
    setCounterTwo(counterTwo + 2)
  }

  const subtractCounterTwo = () =>
  {
    setCounterTwo(counterTwo - 2)
  }

  useEffect(() =>
  {
    if (setCounterTwo !== 0)
    {
      counterTwo = 0
    }
  }, [])

  return (
    <>
      <div>
        <button onClick={handleAdd}>Add</button>
        <p>{count}</p>
        <button onClick={handleSubtract}>Subtract</button>
      </div>
      <div>
        <button onClick={addCounterTwo}>Add 2</button>
        <h4>{counterTwo}</h4>
        <button onClick={subtractCounterTwo}>Subtract 2</button>
      </div>
    </>
  );
};

export default Counter;
