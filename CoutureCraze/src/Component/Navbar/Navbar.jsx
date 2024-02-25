import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";
import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            CoutureCraze
          </a>
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
            <div class="cart-container ">
              <ul className="navbar-nav">
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
            <a href="" id="men" className="text-decoration-none">
              MEN
            </a>
          </li>
          <li>
            <a href="" id="women" className="text-decoration-none">
              WOMEN
            </a>
          </li>
          <li>
            <a href="" id="kids" className="text-decoration-none">
              KIDS
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
