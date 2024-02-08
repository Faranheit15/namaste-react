import RestaurantCard, { withOpenedLabel } from "./RestaurantCard";

import { SWIGGY_API } from "../utils/constants";

import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";

import Shimmer from "./Shimmer";

import useOnlineStatus from "../utils/useOnlineStatus";

import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [restaurantListForFilter, setRestaurantListForFilter] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const res = await fetch(SWIGGY_API);
    const json = await res.json();
    setRestaurantList(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
    setRestaurantListForFilter(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ||
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
    );
    // console.log(
    //   json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants ||
    //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //       ?.restaurants
    // );
  };

  const getTopRatedRestaurants = () => {
    const filteredRestaurants = restaurantList?.filter(
      (res) => res?.info?.avgRatingString > 4
    );
    setRestaurantListForFilter(filteredRestaurants);
  };

  const searchRes = () => {
    const filteredRestaurants = restaurantList?.filter((res) =>
      res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
    );
    setRestaurantListForFilter(filteredRestaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Seems like you're offline</h1>;
  }

  // isPromoted HOC
  const RestaurantCardOpened = withOpenedLabel(RestaurantCard);

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-between">
        <div className="search p-4 m-4">
          <input
            type="text"
            data-testid="searchInput"
            className="search-box border border-solid rounded-md"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn px-4 py-2 m-4 bg-green-100 rounded-xl"
            onClick={() => searchRes()}
          >
            Search
          </button>
          <button
            className="clear-btn px-4 py-2 m-4 bg-red-100 rounded-xl"
            onClick={() => {
              setSearchText("");
              setRestaurantListForFilter(restaurantList);
            }}
          >
            Clear
          </button>
        </div>
        <div className=" m-4 p-4 flex items-center">
          <input
            type="text"
            className="search-box border border-solid rounded-md"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            className="px-4 py-2 m-4 bg-gray-100 rounded-xl"
            onClick={getTopRatedRestaurants}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {restaurantListForFilter?.map((restaurant) => (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            {restaurant?.info?.availability?.opened ? (
              <RestaurantCardOpened resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
