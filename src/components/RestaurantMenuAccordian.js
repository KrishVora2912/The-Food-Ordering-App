import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantMenuItemCard from "./RestaurantMenuItemCard";
import RestInfoAboveMenu from "./RestInfoAboveMenu";
import useGetRestMenu from "../utils/useGetRestMenu";
import RestMenuAccordianEntry from "./RestMenuAccordianEntry";
const RestaurantMenuAccordian = () => {
  const { restId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const restaurantMenuItems = useGetRestMenu(restId);
  const categories =
    restaurantMenuItems?.data?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) => {
        return (
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  return restaurantMenuItems.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurantMenu mb-10">
      <RestInfoAboveMenu
        restInfoAboveMenuData={
          restaurantMenuItems?.data?.cards[0]?.card?.card?.info
        }
      />
      {categories.map((category, index) => {
        return (
          <RestMenuAccordianEntry
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showMenuItems={index === showIndex ? true : false}
            index={index}
            setShowIndex={setShowIndex}
            showIndex={showIndex}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenuAccordian;
