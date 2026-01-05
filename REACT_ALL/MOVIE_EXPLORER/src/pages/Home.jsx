import React, { useEffect, useState } from "react";
import MovieList from "../components/MovieList";

function Home() {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]); // store original data
  const [search, setSearch] = useState("");

  const fetchMovies = async () => {
    const res = await fetch("ADD HERE REQUEST MOVIE URL");
    const data = await res.json();

    setMovies(data.data || []);
    setAllMovies(data.data || []);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // 🔍 SEARCH HANDLER
  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) {
      setMovies(allMovies);
      return;
    }

    const filteredMovies = allMovies.filter((movie) =>
      movie.original_title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

    setMovies(filteredMovies);
  };

  return (
    <div style={{ padding: "30px",marginTop:'60px' }}>
      {/* Search */}
      <form
        onSubmit={handleSearch}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "30px",
        }}
      >
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
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      {/* Movie List */}
      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
