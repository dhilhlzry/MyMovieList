import { Await, useNavigate, useParams } from "react-router-dom";
import { getDetailMovie } from "../api";
import axios from "axios";
import YouTubeVideo from "./VideoComponents";

const DetailComponents = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const videoId = "QczGoCmX-pI"; // Ganti dengan ID video yang Anda inginkan

  console.log({ getDetailMovie });

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
            ✖️
          </button>
          <div className="details">
            <header>
              <img
                className="image-detail"
                src="https://cdn.myanimelist.net/images/anime/13/17405.jpg"
                alt=""
              />
              <div className="details-overview">
                <h2>Naruto</h2>
                {/* <p>Id : {id}</p> */}
                <p>2022-05-09 &bull; 8.71</p>
                <p>Action &bull; Comedy &bull; Adventure</p>
                <p className="synopsis-detail">
                  <em>
                    Moments prior to Naruto Uzumaki's birth, a huge demon known
                    as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure,
                    the Hidden Leaf Village, and wreaked havoc. In order to put
                    an end to the Kyuubi's rampage, the leader of the village,
                    the Fourth Hokage, sacrificed his life and sealed the
                    monstrous beast inside the newborn Naruto.
                  </em>
                </p>
              </div>
            </header>
            <section className="synopsis">
              <YouTubeVideo videoId={videoId} />
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default DetailComponents;
