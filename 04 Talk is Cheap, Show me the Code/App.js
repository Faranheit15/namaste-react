import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

/*
 * -Header
 *   -Logo
 *   -Nav
 * -Body
 *   -RestaurantContainer
 *     -RestaurantCard
 * -Footer
 *   -Copyright
 *   -Links
 *   -Address
 *   -Phone
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://s.tmimgcdn.com/scr/800x500/212900/spoon-and-fork-restaurant-logo_212966-original.png"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">🛒</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        src="https://lh3.googleusercontent.com/p/AF1QipNBRgpz_0NevTSb9nBnriqH8w18SzsANv27MPgi=w768-h768-n-o-v1"
        className="res-logo"
        alt="res-logo"
      />
      <h3>Tunday Kebab</h3>
      <h4>Biriyani, Indian, Mughlai</h4>
      <h4>36 minutes</h4>
      <h4>⭐⭐⭐⭐</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="search" name="" className="search-field" />
        <button className="search-btn">Search</button>
      </div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);
