import React, { useState, useEffect } from "react";
import axios from "axios";

const CatFactsAPI = ({ catFactsMessage }) => {
  const [catFact, setCatFact] = useState([]);

  const catFactData = async () => {
    let response = await axios.get("https://cat-fact.herokuapp.com/facts");
    console.log(response.data);
    setCatFact(response.data);
  };

  useEffect(() => {
    catFactData();
  }, []);

  return (
    <div>
      <h1>{catFactsMessage}</h1>

      <div>
        {catFact.map((value) => {
          return <p>A Cat Fact: {value.text}</p>;
        })}
      </div>
    </div>
  );
};

export default CatFactsAPI;
