import { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-item">
            <Link style={{ textDecoration: "none" }} to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{ textDecoration: "none" }} to="About">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link style={{ textDecoration: "none" }} to="Contact">
              Contact Us
            </Link>
          </li>
          <li className="nav-item">🛒</li>
          <button className="button" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
