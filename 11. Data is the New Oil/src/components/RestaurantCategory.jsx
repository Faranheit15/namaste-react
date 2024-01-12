import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [accordionToggle, setAccordionToggle] = useState(false);
  const handleClick = () => {
    setAccordionToggle(!accordionToggle);
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
          <span>{accordionToggle ? "⬆️" : "⬇️"}</span>
        </div>
        {accordionToggle && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
