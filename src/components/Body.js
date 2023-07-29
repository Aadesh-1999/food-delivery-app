import RestraurantCards from "./RestraurantCards";
import { restaurants } from "../utils/mockRestraurantData";
import { useState, useEffect } from "react";
import ShimmerCards from "./ShimmerCards";
import { swiggyResApiURL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {

    //whole componant gets rendered again when we chaneg any state variable.. using setState
    // console.log("Body rendered..");

    const [searchText,setSearchText]=useState("");

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

    const [filteredRestaurantsList,setFilteredRestaurantsList] = useState([]);

    const [restaurantsList,setRestaurantsList] = useState([
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

    useEffect(()=>{
        fetchResData();
    }, []);

    const fetchResData = async () => {
        const resData = await fetch(swiggyResApiURL);
        const resJson = await resData.json();
        console.log("resJson : ",resJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantsList(resJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantsList(resJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //conditional rendering
    return restaurantsList?.length===0 ? <ShimmerCards/> :
    (
      <div className="bodyContainer">
        <div className="searchContainer">
            <input type="text" name="searchText" id="searchText" onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button className="searchBtn" 
                    onClick={()=>{
                        console.log(searchText);
                        let filteredResult=restaurantsList.filter(
                                (res)=>{
                                    if(res?.info?.name.toLowerCase().includes(searchText.toLowerCase()))
                                        return res;
                                }
                            );
                        console.log("filteredResult : ",filteredResult);
                        setFilteredRestaurantsList(filteredResult);
                    }}
                    >Search
            </button>
        </div>
        <div className="filterContainer">
            <button className="filterBtn"
                onClick={()=>{
                    console.log("restaurantsList : ",restaurantsList);
                    let filteredRestaurantsList=restaurantsList.filter((res)=>{return res.info.avgRating > 4});
                    setFilteredRestaurantsList(filteredRestaurantsList);
                    console.log("filteredRestaurantsList : ",filteredRestaurantsList);
                }}
            >Top rated restraurants nearby</button>
        </div>
        <div className="res-container">
          {/* {restaurants.map((restaurant, index) => {
            return <RestraurantCards restaurant={restaurant} key={index} />;
          })} */}
          {filteredRestaurantsList.map((restaurant, index) => {
            return  <Link to={"/restraurantMenu/"+restaurant.info.id} key={index}>
                        <RestraurantCards restaurant={restaurant} />
                    </Link>;
          })}
        </div>
      </div>
    );
  };

export default Body;