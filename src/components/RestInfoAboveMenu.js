import React from "react";
import { REST_IMAGE_CDN_URL } from "../utils/constants";
const RestInfoAboveMenu = ({ restInfoAboveMenuData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    totalRatingsString,
    locality,
    areaName,
  } = restInfoAboveMenuData;
  return (
    <div className="restInfoAboveMenu w-6/12 mx-auto flex items-center">
      <img
        className="restaurantImage w-60 m-4 rounded-md"
        src={REST_IMAGE_CDN_URL + cloudinaryImageId}
        alt="Restaurant Logo"
      />
      <div className="flex-col m-4">
        <h3 className="font-bold text-2xl">{name}</h3>
        <h4>
          {locality} - {areaName}
        </h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>
          {avgRatingString} <span>&#9734;</span> from {totalRatingsString}
        </h4>
      </div>
    </div>
  );
};

export default RestInfoAboveMenu;
