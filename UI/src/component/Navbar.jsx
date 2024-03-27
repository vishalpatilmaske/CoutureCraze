import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Navbar.css";
import { BsCart4 } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            CoutureCraze
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item ">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-5">
                <Link to="/Contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <Link to="/Features" className="nav-link ">
                Features
              </Link>
            </ul>
            <div class="cart-container  ">
              <ul className="navbar-nav  ">
                <li className="nav-item ">
                  <span className="likes">
                    <FaHeart className="text-danger mt-3 me-3" size={25} />
                  </span>
                </li>
                <li className="nav-item">
                  <Link to="/Signup" className="nav-link me-5">
                    Sign up
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/Cart">
                    <BsCart4 size={35} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <section className="container-fluid categories-menu mt-2">
        <ul className="navbar-nav categories d-flex flex-row justify-content-evenly align-items-center">
          <li>
            <Link className="text-decoration-none" to="/Girls">
              GIRLS
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/Boys">
              BOYS
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" to="/Kids">
              KIDS
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
