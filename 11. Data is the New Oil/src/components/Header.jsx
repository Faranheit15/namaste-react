import { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-blue-100 shadow-lg">
      <div className="w-56">
        <img src={LOGO_URL} alt="logo" className="logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <em>Online Status:</em>
            {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="About">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="Contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="Grocery">Grocery</Link>
          </li>
          <li className="px-4">🛒</li>
          <button
            className={
              isLoggedIn
                ? "button px-4 py-2 bg-red-300 rounded-md"
                : "button px-4 py-2 bg-green-300 rounded-md"
            }
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "🚀Logout" : "👤Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
