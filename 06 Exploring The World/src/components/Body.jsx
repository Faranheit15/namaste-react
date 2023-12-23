import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);

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
  };

  const getTopRatedRestaurants = () => {
    const filteredRestaurants = restaurantList.filter(
      (res) => res.info.avgRatingString > 4
    );
    setRestaurantList(filteredRestaurants);
  };

  return restaurantList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={getTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
