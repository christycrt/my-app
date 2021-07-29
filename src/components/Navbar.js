import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-bar">
      <nav className="container d-flex justify-content-between">
        <ul>
          <li>
            <Link to="/">
              <a href="#home">ACT TICKET</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#myTicket">MY TICKET</a>
          </li>
          <li>
            <a href="#account">ACCOUNT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
