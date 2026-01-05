import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div
      style={{
        width: "220px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor: "#fff",
      }}
    >
      <img
        src={movie.poster_path}
        alt={movie.original_title}
        style={{ width: "100%", height: "300px", objectFit: "cover" }}
      />

      <div style={{ padding: "10px" }}>
        <h4>{movie.original_title}</h4>
        <p style={{ fontSize: "14px" }}>{movie.release_date}</p>

        <Link
          to={`/movie/${movie.movie_id}`}
          state={{ movie }}
          style={{
            display: "inline-block",
            marginTop: "10px",
            padding: "8px 12px",
            backgroundColor: "#2f2f2f",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "4px",
          }}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
