import React from "react";
import { useCart } from "../context/CartContext";

function ProductCart({products}) {

  const { addToCart } = useCart();

  return (
    <div className="card text-center">
      <div className="card-body">
        <h5 className="card-title">{products.name}</h5>
        <p className="card-text">$ {products.price}</p>
        <button className="btn btn-primary" onClick={() => addToCart(products)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCart;
