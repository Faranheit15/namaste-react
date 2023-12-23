import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [topRatedRestaurants, setTopRatedRestaurants] = useState(resList);

  useEffect(() => {
    console.log("Body mounted");
  }, []);

  const getTopRatedRestaurants = () => {
    const filteredRestaurants = resList.filter(
      (res) => res.info.avgRatingString > 4
    );
    setTopRatedRestaurants(filteredRestaurants);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={getTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {topRatedRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
