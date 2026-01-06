import React from 'react';

function Header({cartCount}) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#333',
      color: 'white'
    }}>
      <h2>My Shop</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <span>🛒</span>
        <span>{cartCount}</span>
      </div>
    </div>
  );
}

export default Header;
