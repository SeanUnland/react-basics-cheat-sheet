import React, { useState } from "react";
import "./OnChange.css";

const OnChange = ({ onChangePageMessage }) => {
  const [animals, setAnimals] = useState(["bear ", "cow ", "cat "]);

  const [newAnimal, setNewAnimal] = useState(" ");

  // when you type in the input box "working input" prints in the console
  // when you want to grab the value a user types in the input add an "event" parameter to the handleChange() function
  // this function grabs the user typed value
  // and adds the value to newAnimal state by passing the event.target.value to the setNewAnimal() function of the state
  const handleChange = (event) => {
    console.log("working input");
    // when you console log event you can see the properties in the console. You can see it has a target key
    // console.log(event);
    // event.target.value gets the user input value from the input field when a user types something
    console.log(event.target.value);
    // store the value of the input field into a state
    // and then when a user clicks on the button
    // it grabs the value from the input field
    // and push it to the dom
    setNewAnimal(event.target.value);
  };

  // function to add a new animal to the list. Assign the function to a button in JSX
  const handleAdd = (event) => {
    // prints "working" in console when you click the button to show it's working
    console.log("working");
    // ... = spread operator it grabs the elements of the array and creates a new array
    // let tempAnimal = [...animals];
    // call the setAnimals() state function
    // to bring in the initial state's value using the spread operator and first index variable
    //  and add "newAnimal" state to the "animals" state
    setAnimals([...animals, newAnimal]);
    // once the animal is typed and added
    // this clears the input field
    setNewAnimal("");
  };

  return (
    <>
      <div>
        <h1>{onChangePageMessage}</h1>
      </div>
      <div className="input-area">
        {/* input tag needs an onChange handler when working with useState() */}
        <input type="text" value={newAnimal} onChange={handleChange} />
        <button onClick={handleAdd}>Add New</button>
      </div>
      <div className="animal-list">{animals}</div>
    </>
  );
};

export default OnChange;
