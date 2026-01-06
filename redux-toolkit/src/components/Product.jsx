import React from 'react';

function Product({ name, price, addToCart }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '8px',
      textAlign: 'center',
      width: '200px'
    }}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <button
        style={{
          padding: '10px 15px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
