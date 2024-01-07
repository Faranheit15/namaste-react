import RestaurantCard, { withOpenedLabel } from "./RestaurantCard";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Shimmer from "./Shimmer";

import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [restaurantListForFilter, setRestaurantListForFilter] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log(restaurantList);

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7718962&lng=83.34821459999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();
    setRestaurantList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurantListForFilter(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
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
