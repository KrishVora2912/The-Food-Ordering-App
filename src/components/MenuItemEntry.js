import React from "react";
import { REST_IMAGE_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const MenuItemEntry = ({ data }) => {
  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem(data));
  };
  return (
    <div className="m-2 p-2 bg-gray-200 border-gray-300 border-b-4">
      <div className="flex justify-between">
        <div className="w-10/12">
          <h3 className="text-base">
            {data.isVeg ? <span>🟩</span> : <span> 🟥</span>} {data.name} - Rs.{" "}
            {data.defaultPrice / 100 || data.price / 100}
          </h3>
          <h2 className="font-light text-xs m-4">{data.description}</h2>
        </div>
        <div className="w-2/12">
          <button
            className="absolute bg-white rounded-lg shadow-lg m-2 p-2 text-sm"
            onClick={handleAddItem}
          >
            Add +
          </button>
          <img
            className="object-contain"
            src={REST_IMAGE_CDN_URL + data.imageId}
            alt="Menu Item Logo"
          />
        </div>
      </div>
    </div>
  );
};

export default MenuItemEntry;
