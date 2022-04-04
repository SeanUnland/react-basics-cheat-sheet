import React from "react";

const ClickEvents = ({}) => {
  const handleClick = (event) => {
    console.log("this button is working", event);
  };

  const handleClickAgain = (name, event) => {
    console.log(`hello ${name}`, event.target);
  };
  return (
    <div>
      <h1>Click Events Page</h1>
      <div>
        <button onClick={handleClick}>Click Me</button>
        <button
          onClick={(event) => {
            handleClickAgain("mario", event);
          }}
        >
          Click Me Again
        </button>
      </div>
    </div>
  );
};

export default ClickEvents;
