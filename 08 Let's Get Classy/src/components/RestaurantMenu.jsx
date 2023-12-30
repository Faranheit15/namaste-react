import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MENU_API } from "../utils/constants";

import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>
        {name} - {avgRating}⭐
      </h1>
      <h2>Menu</h2>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      {itemCards && itemCards.length > 0 && (
        <ul>
          {itemCards.map((item, index) => (
            <li key={item?.card?.info?.id}>
              <h3>
                {item?.card?.info?.name} -{" "}
                <em>₹{item?.card?.info?.price / 100}</em>
              </h3>
              <p>{item?.card?.info?.description}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantMenu;
