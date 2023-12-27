import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [restaurantListForFilter, setRestaurantListForFilter] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.76053389749145&lng=83.34655825048685&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setRestaurantListForFilter(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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

  return restaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={() => searchRes()}>Search</button>
          <button
            onClick={() => {
              setSearchText("");
              setRestaurantListForFilter(restaurantList);
            }}
          >
            Clear
          </button>
        </div>
        <button className="filter-btn" onClick={getTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantListForFilter?.map((restaurant) => (
          <Link
            style={{ textDecoration: "none", color: "black" }}
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
