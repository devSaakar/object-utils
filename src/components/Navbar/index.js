import React from "react";
import "./style.css";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
function Navbar({ title, theme, onThemeChange }) {
  const location = useLocation().pathname;
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${theme ? "dark" : "light"} bg-${theme ? "dark" : "light"}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location==='/'?'active':''}`} aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location==='/about'?'active':''}`} to="/about">
                About
              </Link>
            </li>
          </ul>

          <div className="form-check form-switch mx-2">
            <input
              className="form-check-input"
              onChange={() => onThemeChange()}
              type="checkbox"
              role="switch"
              id="theme"
              checked={theme}
            />
            <label
              className="form-check-label"
              htmlFor="theme"
              style={{ color: theme ? "white" : "black" }}
            >
              Dark Mode
            </label>
          </div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Enter Title Here",
};

export default Navbar;
