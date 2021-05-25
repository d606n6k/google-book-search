import { Link, LInk } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" href="/">
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-link active" href="/">
            React Google Books
          </Link>
          <a className="nav-link" href="#">
            Features
          </a>
          <a className="nav-link" href="#">
            Pricing
          </a>
          <a
            className="nav-link disabled"
            href="#"
            tabIndex={-1}
            aria-disabled="true"
          >
            Disabled
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
