import React from "react";

function Card({ post }) {
  return (
    <div
      style={{
        width: "60%",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      {/* Image */}
      <div style={{ textAlign: "center" }}>
        <img
          src={post.img}
          alt={post.title}
          style={{
            width: "100%",
            maxHeight: "200px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>

      {/* Title */}
      <h2 style={{ margin: "15px 0 5px", fontSize: "22px", color: "#333" }}>
        {post.title}
      </h2>

      {/* Meta info */}
      <p style={{ fontSize: "14px", color: "#777", marginBottom: "10px" }}>
        By <strong>{post.author}</strong> • {post.date} •{" "}
        <span style={{ color: "#0077cc" }}>{post.category}</span>
      </p>

      {/* Content preview */}
      <p style={{ fontSize: "16px", color: "#555" }}>
        {post.content.substring(0, 120)}...
      </p>

      {/* Tags */}
      <div style={{ marginTop: "10px" }}>
        {post.tags.map((tag, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              marginRight: "8px",
              marginBottom: "5px",
              padding: "5px 10px",
              backgroundColor: "#f0f0f0",
              borderRadius: "20px",
              fontSize: "12px",
              color: "#555",
            }}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
