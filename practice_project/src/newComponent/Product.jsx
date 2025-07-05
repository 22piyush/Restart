import React from 'react';
import './Product.css';

function Product({ item }) {
  return (
    <div className="product-container">
      {item.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.title}</h3>
          <p>{product.date.toDateString()}</p>
        </div>
      ))}
    </div>
  );
}

export default Product;
