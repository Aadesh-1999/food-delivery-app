import RestraurantCards from "./RestraurantCards";
import { restaurants } from "../utils/mockRestraurantData";
import { useState } from "react";

const Body = () => {

    let restList=[
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
                lastMileTravelString: "2.1 km"
              }
            }
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
                lastMileTravelString: "2.1 km"
              }
            }
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
                lastMileTravelString: "2.1 km"
              }
            }
        }
        ];

    const [restaurantsList,setRestaurantsList] = useState([
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
                lastMileTravelString: "2.1 km"
              }
            }
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
                lastMileTravelString: "2.1 km"
              }
            }
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
                lastMileTravelString: "2.1 km"
              }
            }
        }
        ]);
        
    return (
      <div className="bodyContainer">
        <div className="search">Search</div>
        <div className="filter">
            <button className="filterBtn"
                onClick={()=>{
                    console.log("restaurantsList : ",restaurantsList);
                    let filteredRestaurantsList=restaurantsList.filter((res)=>{return res.info.avgRating > 4});
                    setRestaurantsList(filteredRestaurantsList);
                    console.log("filteredRestaurantsList : ",filteredRestaurantsList);
                }}
            >Filter</button>
        </div>
        <div className="res-container">
          {/* {restaurants.map((restaurant, index) => {
            return <RestraurantCards restaurant={restaurant} key={index} />;
          })} */}
          {restaurantsList.map((restaurant, index) => {
            return <RestraurantCards restaurant={restaurant} key={index} />;
          })}
        </div>
      </div>
    );
  };

export default Body;