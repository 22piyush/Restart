import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

function Home() {
  const [movies, setMovie] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMovies = async () => {
    try {
      const res = await fetch("https://jsonfakery.com/movies/paginated");
      const data = await res.json();
      setMovie(data.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div style={{ padding: "30px",marginTop:'60px'}}>
      {/* Search */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "30px" }}>
        <form style={{ display: "flex", gap: "10px" }}>
          <input
            type="text"
            placeholder="Enter Movie Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "10px",
              width: "250px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#2f2f2f",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Search
          </button>
        </form>
      </div>

      {/* Movies */}
      <div style={{ backgroundColor: "#e0f7fa", padding: "20px", }}>
        <MovieList movies={movies} />
      </div>
    </div>
  );
}

export default Home;
