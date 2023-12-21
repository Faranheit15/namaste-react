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

export default Header;
