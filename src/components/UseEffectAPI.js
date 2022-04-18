import React, { useState, useEffect } from "react";
import axios from "axios";

const UseEffectAPI = ({}) => {
  const [user, setUser] = useState([]);

  // create an async function that fetches the data from the url
  // using async await and axios
  const fetchData = async () => {
    let response = await axios.get("https://api.github.com/users");
    // using the "response" variable
    // console log the data of the link to see the JSON API
    console.log(response.data);
    // call the state function "setUser()" and pass in the response.data to change the state
    setUser(response.data);
  };
  // using useEffect() hook to fetch API data with Axios
  // call the function that fetches the data in useEffect()
  // this example I'm calling the "fetchData()" function
  // if you put the state variable user in the dependency array
  // it will call the API hundreds of time
  // leave the dependency array empty
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>useFetch API</h1>
      <div>
        {/* make an Array.map function to go through the API data */}
        {/* I'm using the state variable to write the Array.map (user.map()) */}
        {/* Array.map takes a call back function with a parameter */}
        {/* and return a specific key: "value" from the API data */}
        {/* in this example I target the 'login' key to return the values of that key */}
        <div>
          {user.map((value) => {
            return <p>{value.login}</p>;
          })}
        </div>

        <div>
          {user.map((value) => {
            return (
              <img
                src={value.avatar_url}
                alt="profile"
                key={value.node_id}
              ></img>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UseEffectAPI;
