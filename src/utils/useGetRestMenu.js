import { useState, useEffect } from "react";
import { SWIGGY_MENU_URL } from "../utils/constants";

const useGetRestMenu = (restId) => {
  const [restaurantMenuItems, setRestaurantMenuItems] = useState([]);

  useEffect(() => {
    fetchRestMenuData();
  }, []);

  const fetchRestMenuData = async function () {
    const data = await fetch(SWIGGY_MENU_URL + restId);
    const json = await data.json();
    setRestaurantMenuItems(json);
  };
  return restaurantMenuItems;
};
export default useGetRestMenu;
