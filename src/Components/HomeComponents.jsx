import { useState } from "react";
import { getMovieList, searchMovie, getDetailMovie } from "../api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomeComponents = () => {
  const navigate = useNavigate();
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
              {movie.poster_path == null ? (
                <img
                  src={`${
                    import.meta.env.VITE_REACT_APP_BASEIMGURL
                  }/${"/https://media.themoviedb.org/t/p/w300_and_h450_bestv2/hQxF5047ywPT7XHjihsfosE1Kmv.jpg"}`}
                  alt=""
                />
              ) : (
                <img
                  src={`${import.meta.env.VITE_REACT_APP_BASEIMGURL}/${
                    movie.poster_path
                  }`}
                  alt=""
                />
              )}
              <div className="details-overview">
                <h2>{movie.title}</h2>
                <p>
                  {movie.release_date} &bull; {movie.vote_average}
                </p>
                <button className="button-trailer" onClick={() => handleButtonClick(movie.id)}>See Trailer</button>
              </div>
            </header>
            <section className="synopsis">
              <p>
                <em>{movie.overview}</em>
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
      // console.log({ query: query });
    }
    if (q.length < 1) {
      getMovieList().then((result) => {
        setPopularMovies(result);
      });
    }
  };

  const handleButtonClick = (id) => {
    navigate(`/detail/${id}`);
    console.log({id});
  };

  // console.log({ popularMovies: popularMovies });
  
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
            Found <strong>{popularMovies.length}</strong> results
          </p>
        </div>
      </nav>
      <main className="main">
        <PopularMovieList />
      </main>
    </>
  );
};
export default HomeComponents;
