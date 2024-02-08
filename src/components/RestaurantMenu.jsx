import { useParams } from "react-router-dom";
import { useState } from "react";

import useRestaurantMenu from "../utils/useRestaurantMenu";

import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="menu text-center p-4 m-4">
      <h1 className="text-3xl">
        <span className="font-bold">{name}</span> - {avgRating}⭐
      </h1>
      <h3 className="text-xl">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      {categories &&
        categories.length > 0 &&
        categories.map((category, index) => (
          <RestaurantCategory
            key={index}
            data={category.card.card}
            showItem={index == showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
    </div>
  );
};

export default RestaurantMenu;
