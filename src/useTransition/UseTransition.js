import React, { useState, useTransition } from "react";
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
  // useTransition()
  // returns an array with two elements
  // first index "isPending" is a boolean
  // second index "startTransition" is a function like useState()
  const [isPending, startTransition] = useTransition();
  const [filterTerm, setFilterTerm] = useState("");

  const filteredProducts = filterProducts(filterTerm);

  const updateFilterHandler = (event) => {
    // startTransition can wrap around logic that should be treated with a lower priority
    startTransition(() => {
      setFilterTerm(event.target.value);
    });
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
