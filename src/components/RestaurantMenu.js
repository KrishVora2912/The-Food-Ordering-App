import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantMenuItemCard from "./RestaurantMenuItemCard";
import RestInfoAboveMenu from "./RestInfoAboveMenu";
import useGetRestMenu from "../utils/useGetRestMenu";

const RestaurantMenu = () => {
  const { restId } = useParams();

  const restaurantMenuItems = useGetRestMenu(restId);

  return restaurantMenuItems.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurantMenu">
      {/* {restaurantMenuItems?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
        (restMenu) => {
          return (
            <RestaurantMenuItemCard
              key={restMenu?.card?.info.id}
              restMenuItemCardData={restMenu?.card?.info}
            />
          );
        }
      )} */}
      {console.log(restaurantMenuItems?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)}
      <RestInfoAboveMenu
        restInfoAboveMenuData={
          restaurantMenuItems?.data?.cards[0]?.card?.card?.info
        }
      />

      {restaurantMenuItems?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(
        (restMenuSubsections, index) => {
          return index !== 0 &&
            index !==
              restaurantMenuItems?.data?.cards[2]?.groupedCard?.cardGroupMap
                ?.REGULAR?.cards?.length -
                1 &&
            index !==
              restaurantMenuItems?.data?.cards[2]?.groupedCard?.cardGroupMap
                ?.REGULAR?.cards?.length -
                2 ? (
            <div key={index} className="restMenuSubsection">
              <h1 className="font-bold text-xl m-4 underline">
                {restMenuSubsections?.card?.card?.title}
              </h1>
              {restMenuSubsections?.card?.card?.categories ? (
                <div className="restMenuSubsectionCategory">
                  {restMenuSubsections?.card?.card?.categories?.map(
                    (restMenuCategory, index) => {
                      return (
                        <div
                          key={index}
                          className="restMenuSubsectionCategoryItem"
                        >
                          <h2 className=" font-bold text-lg m-4">
                            {restMenuCategory?.title}
                          </h2>
                          <div className="restMenuSubsectionItemsContainer flex flex-wrap">
                            {restMenuCategory?.itemCards?.map(
                              (restMenuItemOfCategory) => {
                                return (
                                  <RestaurantMenuItemCard
                                    key={restMenuItemOfCategory?.card?.info?.id}
                                    restMenuItemCardData={
                                      restMenuItemOfCategory?.card?.info
                                    }
                                  />
                                );
                              }
                            )}
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              ) : (
                <div className="restMenuSubsectionItemsContainer flex flex-wrap">
                  {restMenuSubsections?.card?.card?.itemCards?.map(
                    (restMenuItem) => {
                      return (
                        <RestaurantMenuItemCard
                          key={restMenuItem?.card?.info?.id}
                          restMenuItemCardData={restMenuItem?.card?.info}
                        />
                      );
                    }
                  )}
                </div>
              )}
            </div>
          ) : null;
        }
      )}
    </div>
  );
};

export default RestaurantMenu;
