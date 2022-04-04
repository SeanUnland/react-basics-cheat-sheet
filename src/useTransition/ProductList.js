import React from "react";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </div>
  );
};

export default ProductList;
