import RestaurantCard from "./RestaurantCard";
import { resList } from "../server/resData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="search" name="" className="search-field" />
        <button className="search-btn">Search</button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
