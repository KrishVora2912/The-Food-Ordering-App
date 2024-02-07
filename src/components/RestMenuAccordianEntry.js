import React from "react";
import MenuItemEntry from "./MenuItemEntry";
import { useState } from "react";

const RestMenuAccordianEntry = ({
  data,
  showMenuItems,
  setShowIndex,
  index,
  showIndex,
}) => {
  //   const [showMenuItems, setShowMenuItems] = useState(false);
  const handleClick = () => {
    index === showIndex ? setShowIndex(null) : setShowIndex(index);
  };

  return (
    <div className="bg-gray-200 text-xl font-semibold shadow-lg m-3 p-2 w-9/12 mx-auto">
      <div className="flex justify-between cursor-pointer " onClick={handleClick}>
        <div className="">
          {data.title} ({data?.itemCards?.length})
        </div>
        <div> ↓ </div>
      </div>

      {showMenuItems &&
        data?.itemCards?.map((menuItem) => {
          return (
            <MenuItemEntry
              key={menuItem.card.info.id}
              data={menuItem.card.info}
            />
          );
        })}
    </div>
  );
};

export default RestMenuAccordianEntry;
