import { REST_IMAGE_CDN_URL } from "../utils/constants";
const RestaurantCard = ({ restData }) => {
  const { cloudinaryImageId, name, cuisines, avgRatingString, sla, id } =
    restData?.info;
  return (
    <div className="restCardContainer">
      <img
        className="restaurantImage rounded-md"
        src={REST_IMAGE_CDN_URL + cloudinaryImageId}
        alt="Restaurant Logo"
      />
      <h3 className="font-semibold py-2 underline">{name}</h3>
      <h4 className="italic py-1">{cuisines.join(", ")}</h4>
      <h4 className="py-1">
        {avgRatingString} <span>&#9734;</span>
      </h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export const withPureVegLabel = (RestaurantCard) => {
  return ({ restData }) => {
    return (
      <div>
        <label className="absolute bg-green-200 rounded-lg">Pure Veg</label>
        <RestaurantCard restData={restData} />
      </div>
    );
  };
};

export default RestaurantCard;
