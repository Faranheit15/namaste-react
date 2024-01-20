import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowIndex }) => {
  // const [showItem, setShowItem] = useState(false);
  // const handleClick = () => {
  //   setShowItem(!showItem);
  // };
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="bold text-xl">
            {data.title} ({data.itemCards.length})
          </span>{" "}
          <span>{showItem ? "⬆️" : "⬇️"}</span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
