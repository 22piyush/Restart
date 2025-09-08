import React from 'react'

function Card({data}) {
  return (
    <div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    marginTop: "20px",
  }}
>
  {data.map((item) => (
    <div
      key={item.id}
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        padding: "15px",
        backgroundColor: "#fff",
        textAlign: "center",
        transition: "transform 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={item.img}
        alt={item.name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      />
      <h3 style={{ margin: "10px 0", fontSize: "18px", color: "#333" }}>
        {item.name}
      </h3>
      <p style={{ fontSize: "14px", color: "#555" }}>{item.desc}</p>
    </div>
  ))}
</div>

  )
}

export default Card