import React from "react";
import ProductCart from "./ProductCart";

const Products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
  },
  {
    id: 2,
    name: "Mobile",
    price: 20000,
  },
  {
    id: 3,
    name: "Tablet",
    price: 30000,
  },
  {
    id: 4,
    name: "Computer",
    price: 60000,
  },
  {
    id: 5,
    name: "Keyboard",
    price: 2000,
  },
  {
    id: 6,
    name: "Mouse",
    price: 1000,
  },
];

function ProductList() {
  return (
    <div className="row">
      {Products.map((item) => (
        <div className="col-md-3 mb-4" key={item.id}>
            <ProductCart products={item}/>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
