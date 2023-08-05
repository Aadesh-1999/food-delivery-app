import RestraurantCard, { DessertsRestraurantCard } from "./RestraurantCard";
import { restaurants } from "../utils/mockRestraurantData";
import { useState, useEffect, useContext } from "react";
import ShimmerCards from "./ShimmerCards";
import { swiggyResApiURL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //whole componant gets rendered again when we chaneg any state variable.. using setState
  // console.log("Body rendered..");

  const [searchText, setSearchText] = useState("");

  const {login_user, setUserName} = useContext(UserContext);

  const RestraurantCardDesserts = DessertsRestraurantCard(RestraurantCard);

  let restList = [
    {
      info: {
        id: "23719",
        name: "McDonald's",
        cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.3,
        avgRatingString: "4.3",
        sla: {
          slaString: "23 mins",
          lastMileTravelString: "2.1 km",
        },
      },
    },
    {
      info: {
        id: "23719",
        name: "KFC's",
        cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
        costForTwo: "₹400 for two",
        cuisines: ["Chicken Burgers", "Beverages"],
        avgRating: 4.3,
        avgRatingString: "4.3",
        sla: {
          slaString: "23 mins",
          lastMileTravelString: "2.1 km",
        },
      },
    },
    {
      info: {
        id: "23719",
        name: "Dominos",
        cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.8,
        avgRatingString: "4.3",
        sla: {
          slaString: "23 mins",
          lastMileTravelString: "2.1 km",
        },
      },
    },
  ];

  const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([]);

  const [restaurantsList, setRestaurantsList] = useState([
    // {
    //     info: {
    //       id: "23719",
    //       name: "McDonald's",
    //       cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
    //       costForTwo: "₹400 for two",
    //       cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
    //       avgRating: 4.3,
    //       avgRatingString: "4.3",
    //       sla: {
    //         slaString: "23 mins",
    //         lastMileTravelString: "2.1 km"
    //       }
    //     }
    // },
    // {
    //     info: {
    //       id: "23719",
    //       name: "KFC's",
    //       cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
    //       costForTwo: "₹400 for two",
    //       cuisines: ["Chicken Burgers", "Beverages"],
    //       avgRating: 4.3,
    //       avgRatingString: "4.3",
    //       sla: {
    //         slaString: "23 mins",
    //         lastMileTravelString: "2.1 km"
    //       }
    //     }
    // },
    // {
    //     info: {
    //       id: "23719",
    //       name: "Dominos",
    //       cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
    //       costForTwo: "₹400 for two",
    //       cuisines: ["Pizzas"],
    //       avgRating: 3.8,
    //       avgRatingString: "4.3",
    //       sla: {
    //         slaString: "23 mins",
    //         lastMileTravelString: "2.1 km"
    //       }
    //     }
    // }
  ]);

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const resData = await fetch(swiggyResApiURL);
    const resJson = await resData.json();
    console.log(
      "resJson : ",
      resJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setRestaurantsList(
      resJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    console.log(resJson?.data);
    setFilteredRestaurantsList(
      resJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) return <h1>You are Offline..</h1>;

  //conditional rendering
  return restaurantsList?.length === 0 ? (
    <ShimmerCards />
  ) : (
    <div className="bodyContainer">
      <div className="searchContainer">
        <input
          type="text"
          name="searchText"
          id="searchText"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="rounded border-black border-2 py-1 mx-2"
        />
        <button
          className="searchBtn bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded "
          onClick={() => {
            console.log(searchText);
            let filteredResult = restaurantsList.filter((res) => {
              if (
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              )
                return res;
            });
            console.log("filteredResult : ", filteredResult);
            setFilteredRestaurantsList(filteredResult);
          }}
        >
          Search
        </button>
        <span className="mx-8">
          <label htmlFor="">Logged In User :</label>
          <input type="text" className="mx-5 border border-black" value={login_user} onChange={(e)=>{setUserName(e.target.value)}}/>
        </span>
      </div>
      <div className="filterContainer">
        <button
          className="filterBtn bg-orange-600 hover:bg-red-600 text-white font-bold p-2 px-4 rounded m-2"
          onClick={() => {
            console.log("restaurantsList : ", restaurantsList);
            let filteredRestaurantsList = restaurantsList.filter((res) => {
              return res.info.avgRating > 4;
            });
            setFilteredRestaurantsList(filteredRestaurantsList);
            console.log("filteredRestaurantsList : ", filteredRestaurantsList);
          }}
        >
          Top rated restraurants nearby
        </button>
      </div>
      <div className="res-container flex flex-wrap">
        {/* {restaurants.map((restaurant, index) => {
            return <RestraurantCard restaurant={restaurant} key={index} />;
          })} */}
        {filteredRestaurantsList.map((restaurant, index) => {
          //Here use higher order component to display promoted lable for promoted restraurants
          return (
            <Link to={"/restraurantMenu/" + restaurant.info.id} key={index}>
              {restaurant?.info?.cuisines?.includes("Desserts") ? (
                //use the local variable component and not actual higher order component
                <RestraurantCardDesserts restaurant={restaurant} />
              ) : (
                <RestraurantCard restaurant={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
