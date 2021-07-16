import { newExpression } from "jest-snapshot/node_modules/@babel/types";
import "./App.css";

import { useState } from "react";

import Navbar from "./components/Navbar";
import PosterCard from "./components/PosterCard";
import MovieData from "./data/movies.json";
import MoviePopular from "./data/moviesPopular.json";
import MovieIsComing from "./data/moviesIscoming.json";
import MovieSoldout from "./data/moviesSoldout.json";

function App() {
  const [movies, setMovies] = useState(MovieData);

  const onChangeMovie = (moviesId) => {
    if(moviesId === 1) {
      setMovies(MovieData);
    } else if(moviesId === 2) {
      setMovies(MoviePopular);
    } else if(moviesId === 3) {
      setMovies(MovieIsComing);
    } else {
      setMovies(MovieSoldout);
    }
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
      <div className="container d-flex justify-content-center">
        <nav className="nav">
          <a href="#" onClick={() => onChangeMovie(1)} className="nav-item" active-color="#80000">
            ALL TICKET
          </a>
          <a href="#" onClick={() => onChangeMovie(2)} className="nav-item" active-color="#80000">
            POPULAR TICKET
          </a>
          <a href="#" onClick={() => onChangeMovie(3)} className="nav-item" active-color="#80000">
            IS COMIMG
          </a>
          <a href="#" onClick={() => onChangeMovie(4)} className="nav-item" active-color="#80000">
            SOLD OUT
          </a>
          <span className="nav-indicator"></span>
        </nav>
      </div>
      <div className="container">
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
      </div>
    </div>
  );
}

export default App;
