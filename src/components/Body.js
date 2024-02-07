import RestaurantCard, { withPureVegLabel } from "./RestaurantCard";
import { SWIGGY_API_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import ShimmerMoreRest from "./ShimmerMoreRest";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restDataFromApi, setRestDataFromApi] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [page, setPage] = useState(1);
  const [isGettingMoreData, setIsGettingMoreData] = useState(false);
  const [isTopClicked, setIsTopClicked] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const fetchMoreData = async function () {
    const data = await fetch(SWIGGY_API_URL);
    let jsonData = await data.json();
    const newRestData =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const mergedData = [...restDataFromApi, ...newRestData];
    setRestDataFromApi(mergedData);
    setFilteredRestaurants(mergedData);
    setIsGettingMoreData(false);
  };

  useEffect(() => {
    fetchMoreData();
  }, [page]);

  const handelInfiniteScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      const updationIsGettingMoreData = true;
      setIsGettingMoreData(updationIsGettingMoreData);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (isTopClicked === false && isSearchClicked === false) {
      window.addEventListener("scroll", handelInfiniteScroll);
    }
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, [isTopClicked, isSearchClicked]);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Look's like your internet is down! Please check it to continue ordering
        food from the website
      </h1>
    );
  }

  if (restDataFromApi.length === 0) {
    return <Shimmer />;
  }
  const PromotedRestaurantCard = withPureVegLabel(RestaurantCard);
  return (
    <div className="body bg-blue-50">
      <div className="filter flex">
        <div className="search">
          <input
            type="text"
            className="searchBox m-4 px-4 border border-gray-500 rounded-md"
            id="searchBox"
            placeholder="Search for Restaurants"
            value={searchData}
            onChange={(e) => {
              setSearchData(e.target.value);
            }}
          />
          <button
            className="searchBtn  m-4 px-4 bg-green-200 border border-gray-500 rounded-md"
            onClick={() => {
              newData = restDataFromApi?.filter((rest) => {
                return rest.info.name
                  .toLowerCase()
                  .includes(searchData.toLowerCase());
              });
              setIsSearchClicked(true);
              setFilteredRestaurants(newData);
            }}
          >
            Search
          </button>
        </div>
        <div className="top-rated-all-restaurants-btn-container">
          <button
            className="top-rated-all-restaurants-btn m-4 px-4 bg-yellow-200 border border-gray-500 rounded-md"
            onClick={() => {
              const newData = restDataFromApi?.filter((rest) => {
                return rest.info.avgRating > 4.3;
              });
              setIsTopClicked(true);
              setFilteredRestaurants(newData);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restaurantContainer flex flex-wrap">
        {filteredRestaurants?.map((restInfo, index) => {
          return (
            <Link
              className="w-52 m-4 p-4 border rounded-md bg-gray-100 hover:bg-gray-300 border-gray-400"
              key={index}
              to={"/restaurant/" + restInfo.info.id}
            >
              {restInfo?.info?.veg ? (
                <PromotedRestaurantCard restData={restInfo} />
              ) : (
                <RestaurantCard restData={restInfo} />
              )}
            </Link>
          );
        })}
      </div>
      {isGettingMoreData && <ShimmerMoreRest />}
    </div>
  );
};

export default Body;
