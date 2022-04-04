import React, { useEffect, useRef } from "react";

const Basics = ({ whatsUp, message, onClicked, name }) => {
  // useEffect()
  // The empty array is for your dependencies or props useEffect should listen for
  // when it mounts it runs the function once
  // you'll see "we are here" in the console every time you refresh or load the component
  // useful to fetch data from backend or do something just once, when the component is created
  // useEffect() takes a callback function
  // useEffect() second argument is an array that can take prop dependencies
  // to see if those props change
  // in this case the prop "name" is passed to the dependency array
  // which is the state that comes from the parent App component

  useEffect(() => {
    console.log("we are here");
  }, [name]);

  //   useEffect(() => {
  //     // this useEffect() return() function is invoked on cleanup or unmount
  //     return () => {};
  //   }, []);

  // I'm using useRef on the <p></p> element to see it's properties in the console
  // enables access to underlying properties in the console of the dom element or element displayed on the screen
  // use ref={variable assigned to useRef()} on the JSX element you want to use
  const pRef = useRef();

  // .current comes from looking at the console object that the <p></p> tag shows when you click it.
  // when you access the element properties in the console you can drill down like.pRef.current.style.color and change the properties
  // in this example we change the <p></p> element to red when you click on it
  // I assigned the color to red in the changeStyles function
  // I then assigned the changeStyles function to an onClick={} in the JSX
  const changeStyles = () => {
    console.log((pRef.current.style.color = "orange"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("You clicked submit");
  };

  return (
    <>
      <h1 onClick={onClicked}>{whatsUp}</h1>

      <p>{message}</p>

      <p>{name}</p>

      <p ref={pRef} onClick={changeStyles}>
        Click Me to see useRef in console
      </p>
      <div>
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Basics;
