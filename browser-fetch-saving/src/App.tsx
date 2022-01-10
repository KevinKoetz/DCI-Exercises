import React, { useEffect, useState, useLayoutEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Omdb } from "./apiCall";
import { MovieData } from "./apiCall";

const ombdClient = new Omdb("d8131206");

function App() {
  const [movieSearch, setMovieSearch] = useState("");
  const [movies, setMovies] = useState<MovieData[]>([]);

  const handleSave = async (e: React.MouseEvent) => {
    const movieData = await ombdClient.getMovieData(movieSearch);

    //Movie not found
    if (movieData.Response === "False") {
      alert(movieData.Error);
      return;
    }

    //Movie already in the list
    if (movies.find((movie) => movie.imdbID === movieData.imdbID)) {
      alert("Movie already inside the list");
      return;
    }

    setMovies([...movies, movieData]);
  };

  const handleReset = () => {
    setMovies([]);
    localStorage.removeItem("movies")
  }

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  useLayoutEffect(() => {
    const movies = localStorage.getItem("movies");
    if (movies) setMovies(JSON.parse(movies));
  }, []);

  return (
    <div className="App">
      <h2 className="title">My Movies</h2>
      <input
        type="text"
        className="movie-input"
        id="input"
        placeholder="Add a movie"
        value={movieSearch}
        onChange={(e) => setMovieSearch(e.target.value)}
      />
      <section className="movies">
        {movies.map((movie) => (
          <section className="movie-display" key={movie.imdbID}>
            <section className="movie-meta">
              <h2>${movie.Title}</h2>
              <p>Release date: ${movie.Released}</p>
              <p>Run time: ${movie.Runtime}</p>
              <p>Rated: ${movie.Rated}</p>
            </section>
            <p>${movie.Plot}</p>
          </section>
        ))}
      </section>

      <section className="buttons">
        <button className="btn-save" onClick={handleSave}>
          Save
        </button>
        <button className="btn-reset" onClick={handleReset}>Reset</button>
      </section>
    </div>
  );
}

export default App;
