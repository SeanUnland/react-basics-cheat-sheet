import React from "react";

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product, key) => (
        <li>{product}</li>
      ))}
    </div>
  );
};

export default ProductList;
