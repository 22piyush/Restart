import React from "react";
import MovieCart from "./MovieCart";

function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return <p>No Movies Found</p>;
  }

  return (
    <div style={{ display: "flex", justifyContent:'center' ,gap: "30px", flexWrap: "wrap" }}>
      {movies.map((movie) => (
        <MovieCart key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
