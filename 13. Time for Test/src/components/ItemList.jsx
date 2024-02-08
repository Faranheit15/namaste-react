import React from "react";
import { CDN_LINK } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/store/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleItemAdd = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left hover:bg-gray-200 hover:rounded-xl flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                {" "}
                - ₹
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button
                className="p-2 bg-white shadow-lg m-auto"
                onClick={() => handleItemAdd(item)}
              >
                ➕
              </button>
            </div>
            <img
              src={CDN_LINK + item?.card?.info?.imageId}
              alt={item?.card?.info?.name}
              className="w-24 h-24 rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
