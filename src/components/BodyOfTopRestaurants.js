import React from "react";

const BodyOfTopRestaurants = ({ dataOfTopRestaurants }) => {
  return (
    <div className="restaurantContainer">
      <h1>YOOOOOO</h1>
      {dataOfTopRestaurants?.map((restInfo, index) => {
        return (
          <Link key={index} to={"/restaurant/" + restInfo.info.id}>
            <RestaurantCard restData={restInfo} />
          </Link>
        );
      })}
    </div>
  );
};

export default BodyOfTopRestaurants;
