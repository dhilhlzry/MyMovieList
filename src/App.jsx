import { useState } from "react";
import "./App.css";
import { getMovieList, searchMovie } from "./api";
import { useEffect } from "react";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="box" key={i}>
          <button className="btn-toggle">🤍</button>
          <div className="details">
            <header>
              <img
                src={`${import.meta.env.VITE_REACT_APP_BASEIMGURL}/${
                  movie.poster_path
                }`}
                alt={movie.title}
              />
              <div className="details-overview">
                <h2>{movie.title}</h2>
                <p>
                  {movie.release_date} &bull; {movie.vote_average}
                </p>
              </div>
            </header>
            <section>
              <p>
                <em className="synopsis">{movie.overview}</em>
              </p>
            </section>
          </div>
        </div>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
      console.log({ query: query });
    }
  };

  console.log({ popularMovies: popularMovies });

  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍥</span>
          <h1>MovieList Mania</h1>
          <span role="img">🍥</span>
        </div>
        <div className="search-container">
          <input
            className="search"
            type="text"
            placeholder="Search Movie..."
            onChange={({ target }) => search(target.value)}
          />
          <p className="search-results">
            Found <strong>20</strong> results
          </p>
        </div>
      </nav>
      <main className="main">
        <PopularMovieList />
      </main>
    </>
  );
};

export default App;
