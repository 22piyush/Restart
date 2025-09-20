import React from 'react'

function Product({post}) {

  const handleAddToCart = () => {
    console.log("Added to cart:", post);
    // You can dispatch this to Redux if needed
  };

  return (
    <>
    <div style={{
      width: "250px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      textAlign: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <img 
        src={post.image} 
        alt={post.title} 
        style={{ height: "150px", objectFit: "contain", marginBottom: "10px" }}
      />
      <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>{post.title}</h3>
      <p style={{ fontWeight: "bold", color: "green", marginBottom: "10px" }}>${post.price}</p>
      <p style={{ fontSize: "12px", color: "#555", marginBottom: "15px" }}>{post.description}</p>
      <button 
        onClick={handleAddToCart} 
        style={{
          padding: "8px 12px",
          backgroundColor: "#7d2ae8",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Add to Cart
      </button>
    </div>
    </>
  )
}

export default Product