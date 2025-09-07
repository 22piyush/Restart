import React, { useState } from 'react'

function Card({ id, name, desc, img, price }) {

  const [readMore, setReadMore] = useState(false);
  // Show first 100 characters if not expanded
  const description = `${desc.substring(0, 40)}...`;

  function readMoreHandler(){
        setReadMore(!readMore)
  }

  return (


    <div>
        <div
        style={{
            width: "300px",
            border: "1px solid #ddd",
            borderRadius: "12px",
            overflow: "hidden",
            margin: "15px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
            transition: "transform 0.2s ease",
            textAlign: "center"
        }}
        >
      <img
        src={img}
        alt={name}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div style={{ padding: "15px" }}>
        <h2 style={{ fontSize: "1.2rem", margin: "10px 0" }}>{name}</h2>
        <p style={{ fontSize: "0.9rem", color: "#555", marginBottom: "10px" }}>
          {description}
          <span style={{color:'blue'}} onClick={readMoreHandler}>
                {readMore ? 'Show Less' : 'Read More'}
          </span>
        </p>
        <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#2e8b57", marginBottom: "15px" }}>
          ${price}
        </h3>
        <button
          style={{
            backgroundColor: "#ff4d4f",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Not Interested
        </button>
      </div>
    </div>
    </div>
  )
}

export default Card
