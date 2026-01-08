import React from "react";

function ProductCart({products}) {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">{products.name}</h5>
        <p className="card-text">$ {products.price}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCart;
