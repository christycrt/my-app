import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="nav-bar">
          <nav className="container d-flex justify-content-between">
            <ul>
              <li>
                <a href="#home">ACT TICKET</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#about">MY TICKET</a>
              </li>
              <li>
                <a href="#about">ACCOUNT</a>
              </li>
            </ul>
          </nav>
        </div>
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
            <img className="poster" src="/images/poster/ironman.png" />
            <div>Ironman3</div>
            <button type="button" class="btn btn-primary">
              GET TICKET
            </button>
          </div>
          <div className="col">
            <img className="poster" src="/images/poster/solo.png" />
            <div>SOLO</div>
            <button type="button" className="btn btn-primary">
              GET TICKET
            </button>
          </div>
          <div className="col">
            <img className="poster" src="/images/poster/batman.png" />
            <div>Batman</div>
            <button type="button" className="btn btn-primary">
              GET TICKET
            </button>
          </div>
          <div className="col">
            <img className="poster" src="/images/poster/ironman.png" />
            <div>Ironman3</div>
            <button type="button" className="btn btn-primary">
              GET TICKET
            </button>
          </div>
          <div className="col">
            <img className="poster" src="/images/poster/solo.png" />
            <div>SOLO</div>
            <button type="button" className="btn btn-primary">
              GET TICKET
            </button>
          </div>
          <div className="col">
            <img className="poster" src="/images/poster/batman.png" />
            <div>Batman</div>
            <button type="button" className="btn btn-primary">
              GET TICKET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
