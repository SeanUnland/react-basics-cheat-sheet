import React, { useState } from "react";
import ProductList from "./ProductList";
import { generateProducts } from "./data";

const dummyProducts = generateProducts();

const filterProducts = (filterTerm) => {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => {
    product.includes(filterTerm);
  });
};

const UseTransition = ({}) => {
  const [filterTerm, setFilterTerm] = useState("");

  const filteredProducts = filterProducts(filterTerm);

  const updateFilterHandler = (event) => {
    setFilterTerm(event.target.value);
  };
  return (
    <div>
      <h1>Use Transition</h1>
      <div>
        <input
          type="text"
          //   value={filterTerm}
          onChange={updateFilterHandler}
        ></input>
        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
};

export default UseTransition;
