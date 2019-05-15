import React from "react";
import { NavLink } from "react-router-dom";

// Images
import blushUpLogo from "../images/blushUpLogo.svg";

// CSS
import "../css/Navbar.css";

const IndexNavbar = () => {
  return (
    <nav className="index-navbar">
      <div className="index-navbar-logo">
        <NavLink to="/" className="index-navbar-logo-link red-cl">
          <img src={blushUpLogo} alt="blush up logo" />
          <h2>BLUSHUP</h2>
        </NavLink>
      </div>

      <div className="index-navbar-links">
        <NavLink to="/retailers" id="retailerlink">
          For Retailers
        </NavLink>
        <NavLink to="/login" id="loginlink">
          Login
        </NavLink>
        <NavLink to="/signup" className="red-btn" id="signuplink">
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
};

export default IndexNavbar;
