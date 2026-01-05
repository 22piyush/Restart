import React from "react";
import { useLocation, Link, useNavigate  } from "react-router-dom";

function MovieDetail() {

    // useParams → when you want to get something from the URL (like id) and then fetch data from an API or backend.
    // useLocation → when you already have the data (passed via state) and don’t need to fetch it again.

  const { state } = useLocation();
  const movie = state?.movie;
  const navigate = useNavigate();


  if (!movie) {
    return <h2 style={{ padding: "30px" }}>Movie not found</h2>;
  }

  return (
    <div  style={{ padding: "30px",marginTop:'60px'}}>
      {/* Backdrop */}
      <div
        style={{
          height: "300px",
          backgroundImage: `url(${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div style={{ padding: "30px" }}>
        {/* Back Button */}
        <p
           onClick={() => navigate("/")}
          style={{
            textDecoration: "none",
            color: "#2f2f2f",
            fontWeight: "500",
            cursor:'pointer'
          }}
        >
          ← Back to Movies
        </p>

        {/* Movie Main Info */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            marginTop: "20px",
            alignItems: "flex-start",
          }}
        >
          {/* Poster */}
          <img
            src={movie.poster_path}
            alt={movie.original_title}
            style={{
              width: "280px",
              borderRadius: "8px",
            }}
          />

          {/* Details */}
          <div>
            <h2>{movie.original_title}</h2>

            <p><b>Language:</b> {movie.original_language}</p>
            <p><b>Release Date:</b> {movie.release_date}</p>
            <p><b>Rating:</b> ⭐ {movie.vote_average} ({movie.vote_count} votes)</p>

            <p style={{ marginTop: "15px", lineHeight: "1.6" }}>
              {movie.overview}
            </p>
          </div>
        </div>

        {/* Cast Section */}
        <h2 style={{ marginTop: "40px",textAlign:'center' }}>Cast</h2>

        <div
          style={{
            display: "flex",
            justifyContent:'center',
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          {movie.casts.map((cast) => (
            <div
              key={cast.id}
              style={{
                width: "160px",
                textAlign: "center",
              }}
            >
              <img
                src={
                  cast.profile_path &&
                  cast.profile_path !== "https://image.tmdb.org/t/p/original"
                    ? cast.profile_path
                    : "https://via.placeholder.com/160x220?text=No+Image"
                }
                alt={cast.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "6px",
                }}
              />

              <p style={{ margin: "8px 0 2px", fontWeight: "500" }}>
                {cast.name}
              </p>
              <p style={{ fontSize: "13px", color: "#555" }}>
                as {cast.character}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
