import React, { useState, useEffect } from "react";

const Counter = ({}) => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <button onClick={handleAdd}>Add</button>
        <p>{count}</p>
        <button onClick={handleSubtract}>Subtract</button>
      </div>
    </>
  );
};

export default Counter;
