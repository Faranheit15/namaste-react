import { useParams } from "react-router-dom";

import useRestaurantMenu from "../utils/useRestaurantMenu";

import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu p-4 m-4">
      <h1 className="text-3xl">
        <span className="font-bold">{name}</span> - {avgRating}⭐
      </h1>
      <h2 className="text-2xl">Menu</h2>
      <h3 className="text-xl">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      {itemCards && itemCards.length > 0 && (
        <ul>
          {itemCards.map((item, index) => (
            <li
              key={item?.card?.info?.id}
              className="hover:bg-slate-200 rounded-lg px-4"
            >
              <h3 className="py-4 text-lg">
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
