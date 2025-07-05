import React, { useState } from 'react'

function ProductCard({ title, date }) {
  const [localTitle, setLocalTitle] = useState(title);

  function handleClick() {
    setLocalTitle('Pop Corn');
  }

  return (
    <div className="product-card">
      <h3>{localTitle}</h3>
      <p>{date.toDateString()}</p>
      <button onClick={handleClick}>Add To Cart</button>
    </div>
  );
}

export default ProductCard