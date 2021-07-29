import "../App.css"

import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import PosterCard from "../components/PosterCard";
// import MovieData from "./data/movies.json";
// import MoviePopular from "./data/moviesPopular.json";
// import MovieIsComing from "./data/moviesIscoming.json";
// import MovieSoldout from "./data/moviesSoldout.json";

function Home() {
  const [movies, setMovies] = useState(null);
  const [tab, setTab] = useState(1);

  useEffect(() => {
    setMovies(null);
    if (tab === 1) {
      fetchAllMovies();
    } else if (tab === 2) {
      fetchPopularMovies();
    } else if (tab === 3) {
      fetchIsComingMovies();
    } else {
      fetchSoldoutMovies();
    }
  }, [tab]);

  const fetchAllMovies = () => {
    axios
      .get("http://13.76.100.207:8080/api/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const fetchPopularMovies = () => {
    axios
      .get("http://13.76.100.207:8080/api/movies/popular")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const fetchIsComingMovies = () => {
    axios
      .get("http://13.76.100.207:8080/api/movies/iscoming")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const fetchSoldoutMovies = () => {
    axios
      .get("http://13.76.100.207:8080/api/movies/soldout")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div className="App">
      <header>
        <Navbar />
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/cover/solo.png"
                className="d-block w-100"
                alt="solo"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/cover/batman.png"
                className="d-block w-100"
                alt="batman"
              />
            </div>
            <div className="carousel-item">
              <img
                src="images/cover/ironman.png"
                className="d-block w-100"
                alt="ironman"
              />
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row justify-content-center tab-bar">
          <button
            className={`col-lg-3 tab ${tab === 1 ? "tab-selected" : ""}`}
            onClick={() => setTab(1)}
          >
            ALL TICKET
          </button>
          <button
            className={`col-lg-3 tab ${tab === 2 ? "tab-selected" : ""}`}
            onClick={() => setTab(2)}
          >
            POPULAR TICKET
          </button>
          <button
            className={`col-lg-3 tab ${tab === 3 ? "tab-selected" : ""}`}
            onClick={() => setTab(3)}
          >
            IS COMIMG
          </button>
          <button
            className={`col-lg-3 tab ${tab === 4 ? "tab-selected" : ""}`}
            onClick={() => setTab(4)}
          >
            SOLD OUT
          </button>
        </div>
        {movies && (
          <div className="row">
            {movies.map((movies) => {
              return (
                <div key={movies.id} className="col-lg-2">
                  <PosterCard
                    image={movies.cover}
                    title={movies.name}
                    detail={movies.date_range_show}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;