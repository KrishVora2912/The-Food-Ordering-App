import React from "react";
import { REST_IMAGE_CDN_URL } from "../utils/constants";

const RestaurantMenuItemCard = ({ restMenuItemCardData }) => {
  // console.log(restMenuItemCardData);
  const { id, imageId, isVeg, name, price, defaultPrice, description } =
    restMenuItemCardData;
  return (
    <div className="restMenuItemCardContainer w-52 m-4 p-4 border rounded-md bg-gray-100 hover:bg-gray-300 border-gray-400">
      <img
        className="restMenuItemImage w-56 rounded-lg"
        src={REST_IMAGE_CDN_URL + imageId}
        alt="Menu Item Logo"
      />
      <h3 className="p-2">{name}</h3>
      <h2 className="p-2">{description}</h2>
      {/* <h4>{cuisines.join(", ")}</h4> */}
      {/* <h4>
        {isVeg} <span>&#9734;</span>
      </h4> */}
      <h4 className="p-2"> Rs. {defaultPrice / 100 || price / 100}</h4>
    </div>
  );
};

export default RestaurantMenuItemCard;
