import React, { useState, useEffect } from "react";
import axios from "axios";

const CatAPIUseEffect = ({}) => {
  const [cat, setCat] = useState([]);

  const catData = async () => {
    let response = await axios.get("https://catfact.ninja/breeds");
    console.log(response.data.data);
    setCat(response.data.data);
  };

  useEffect(() => {
    catData();
  }, []);

  return (
    <div>
      {" "}
      <h1>Cat API Use Effect</h1>
      <h4>Cat Breeds From JSON Data Below</h4>
      <div>
        {cat.map((value) => {
          return <p key={value.id}>Breed: {value.breed}</p>;
        })}
      </div>
      <h4>Cat Countries From JSON Data Below</h4>
      <div>
        {cat.map((value) => {
          return <p key={value.id}>Country: {value.country}</p>;
        })}
      </div>
    </div>
  );
};

export default CatAPIUseEffect;
