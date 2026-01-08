import React from "react";

const Products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000
  },
  {
    id: 2,
    name: "Mobile",
    price: 20000
  },
  {
    id: 3,
    name: "Tablet",
    price: 30000
  },
  {
    id: 4,
    name: "Computer",
    price: 60000
  }
];



function ProductList() {
  return (
    <div className="row">
      <div className="col-md-3">
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Laptop</h5>
            <p className="card-text">₹50,000</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
