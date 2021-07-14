import "./App.css";

import Navbar from "./components/Navbar";
import PosterCard from "./components/PosterCard";

function App() {
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
          <a href="" className="nav-item" active-color="#80000">
            ALL TICKET
          </a>
          <a href="" className="nav-item" active-color="#80000">
            POPULAR TICKET
          </a>
          <a href="" className="nav-item" active-color="#80000">
            IS COMIMG
          </a>
          <a href="" className="nav-item" active-color="#80000">
            SOLD OUT
          </a>
          <span className="nav-indicator"></span>
        </nav>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <PosterCard
              image="ironman.png"
              title="IRON MAN 3"
              detail="13ส.ค.2561 - 21ส.ค.2561"
            />
          </div>
          <div className="col">
            <PosterCard
              image="batman.png"
              title="BATMAN"
              detail="13ส.ค.2561 - 21ส.ค.2561"
            />
          </div>
          <div className="col">
            <PosterCard
              image="solo.png"
              title="SOLO"
              detail="13ส.ค.2561 - 21ส.ค.2561"
            />
          </div>
          <div className="col">
            <PosterCard
              image="ironman.png"
              title="IRON MAN 3"
              detail="13ส.ค.2561 - 21ส.ค.2561"
            />
          </div>
          <div className="col">
            <PosterCard
              image="batman.png"
              title="BATMAN"
              detail="13ส.ค.2561 - 21ส.ค.2561"
            />
          </div>
          <div className="col">
            <PosterCard
              image="solo.png"
              title="SOLO"
              detail="13ส.ค.2561 - 21ส.ค.2561"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
