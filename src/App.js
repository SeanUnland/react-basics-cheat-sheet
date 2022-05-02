import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Basics from "./components/Basics";
import OnChange from "./components/OnChange";
import HooksBasics from "./components/HooksBasics";
import ClickEvents from "./components/ClickEvents";
import UseTransition from "./useTransition/UseTransition";
import UsingStatePractice from "./components/UsingStatePractice";
import UseEffectAPI from "./components/UseEffectAPI";
import FetchingDataFromExpressBE from "./components/FetchingDataFromExpressBE";
import CatAPIUseEffect from "./components/CatAPIUseEffect";
import UsingMaterialUI from "./components/UsingMaterialUI";

// Things to know
// Props
// onClick
// onBlur
// onChange

// Hooks
// useState()
// useEffect() - can be used to grab data from backend
// useRef()

function App() {
  // useState()
  // "name" or (first index) equals state or is the variable that is storing the state
  // "setName" (second index) is a function you can call to change that state
  // the argument you pass in useState(argument) is the initial state of the first index variable
  // in this example initially name = "hello bob"
  const [name, setName] = useState("Hello Bob");

  // this changes the state from "hello bob" to "july" by calling the setName() function and passing in an argument
  // setName("july");

  const onCardClicked = () => {
    console.log("You just clicked What's up?");
  };

  const message = "What are you doing?";

  const fetchingDataMessage =
    "I'm fetching data from the Express Back End here";

  // use the setName() function to change the state to "Bob" and add a random number
  useEffect(() => {
    setInterval(() => {
      setName("Bob " + Math.random());
    }, 60000);
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("You clicked submit");
  // };

  const onChangePageMessage = "This is the onChange Page";

  const materialUIMessage = "This page shows examples of using Material UI";

  return (
    <>
      <div className="App">
        <Link to="/">Home Page</Link>
      </div>
      <div>
        <Link to="/basics">Basics Page</Link>
      </div>
      <div>
        <Link to="/onchange">On Change Page</Link>
      </div>
      <div>
        <Link to="/hooksbasics">Hooks Basics Page</Link>
      </div>
      <div>
        <Link to="/clickevents">Click Events Page</Link>
      </div>
      <div>
        <Link to="/usetransition">Use Transitions Page</Link>
      </div>
      <div>
        <Link to="/usingstatepractice">Using State Practice</Link>
      </div>
      <div>
        <Link to="/useeffectapi"> useEffect API Call</Link>
      </div>
      <div>
        <Link to="/fetchingdatafromexpress"> Fetching Data From Express</Link>
      </div>
      <div>
        <Link to="/catapiuseeffect">Cat API useEffect</Link>
      </div>
      <div>
        <Link to="/usingmaterialui">Using Material UI</Link>
      </div>

      <div>
        <Routes>
          <Route path="/">Home Page</Route>
          <Route
            path="/basics"
            element={
              <Basics
                name={name}
                whatsUp="What's up?"
                message={message}
                onClicked={onCardClicked}
              />
            }
          ></Route>
          <Route
            path="/onchange"
            element={<OnChange onChangePageMessage={onChangePageMessage} />}
          ></Route>
          <Route path="/hooksbasics" element={<HooksBasics />}></Route>
          <Route path="/clickevents" element={<ClickEvents />}></Route>
          <Route path="/usetransition" element={<UseTransition />}></Route>
          <Route
            path="/usingstatepractice"
            element={<UsingStatePractice />}
          ></Route>
          <Route path="/useeffectapi" element={<UseEffectAPI />}></Route>
          <Route
            path="/fetchingdatafromexpress"
            element={
              <FetchingDataFromExpressBE message={fetchingDataMessage} />
            }
          ></Route>
          <Route path="/catapiuseeffect" element={<CatAPIUseEffect />}></Route>
          <Route
            path="/usingmaterialui"
            element={<UsingMaterialUI materialMessage={materialUIMessage} />}
          ></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
