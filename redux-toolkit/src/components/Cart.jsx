import React from 'react';

function Cart({ cartCount }) {
  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '10px 15px',
      backgroundColor: '#f8f9fa',
      border: '1px solid #ccc',
      borderRadius: '5px'
    }}>
      <span>🛒 Items in Cart: {cartCount}</span>
    </div>
  );
}

export default Cart;
