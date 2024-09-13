import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import YouTubeVideo from "./VideoComponents";

const DetailComponents = () => {
  const [movie, setDetailMovie] = useState([]);
  const [video, setDetailVideo] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();
  const selectedIndex = "Trailer"; // ID yang ingin dipilih

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/" +
            id +
            "?language=en-US?page=1&api_key=536e17af8fc37caa6e658a2a49e6370a"
        );
        console.log(response.data);
        setDetailMovie(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchMovie();
  }, []);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/" +
            id +
            "/videos?language=en-US?page=1&api_key=536e17af8fc37caa6e658a2a49e6370a"
        );
        console.log(response.data);
        setDetailVideo(response.data);

        const selectedItem = response.data.results.find(
          (item) => item.type === selectedIndex
        );
        setSelectedItem(selectedItem);
        // console.log({ selectedItem });
      } catch (error) {
        setError(error);
      }
    };

    fetchVideo();
  }, []);

  const videoId = `${selectedItem?.key}`; // Ganti dengan ID video yang Anda inginkan

  // const GenreList = () => {
  //   return movie.genres.map((genre, i) => {
  //     return <li key={i}>{genre.name}</li>;
  //   });
  // };

  return (
    <>
      <nav className="nav-bar">
        <div className="logo">
          <span role="img">🍥</span>
          <h1>MovieList Mania</h1>
          <span role="img">🍥</span>
        </div>
        <div className="search-container">
          <p className="search-results">
            Found <strong>1</strong> results
          </p>
        </div>
      </nav>
      <main className="main-detail">
        <div className="box-detail">
          <button className="btn-toggle">🤍</button>
          <button className="btn-exit" onClick={() => navigate("/")}>
            ❌
          </button>
          <div className="details">
            <header>
              <img
                className="image-detail"
                src={`${import.meta.env.VITE_REACT_APP_BASEIMGURL}/${
                  movie.poster_path
                }`}
                alt=""
              />
              <div className="details-overview">
                <h2>{movie.original_title}</h2>
                {/* <p>Id : {id}</p> */}
                <p>
                  {" "}
                  {movie.release_date} &bull; {movie.vote_average}
                </p>
                {/* <GenreList/> */}
                <p>Action &bull; Comedy &bull; Adventure</p>
                <p className="synopsis-detail">
                  <em>{movie.overview}</em>
                  {/* <em>{selectedItem.key}</em> */}
                </p>
              </div>
            </header>
            <section className="synopsis">
              <YouTubeVideo videoId={videoId} />
            </section>
          </div>
        </div>
        <footer className="footer">
          <p>© 2024 MovieList Mania. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
};

export default DetailComponents;
