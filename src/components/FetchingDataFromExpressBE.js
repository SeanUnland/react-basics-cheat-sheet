import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchingDataFromExpressBE = ({ message }) => {
  const [backendData, setBackendData] = useState([]);

  //   const fetchFromExpress = async () => {
  //     let response = await axios.get("http://localhost:5001/api");
  //     console.log(response.data);
  //     setBackendData(response.data);
  //   };

  // using useEffect to fetch the API data created with Express in the server folder
  //   useEffect(() => {
  //     fetchFromExpress();
  //   }, []);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <p>{backendData}</p>
    </div>
  );
};

export default FetchingDataFromExpressBE;
