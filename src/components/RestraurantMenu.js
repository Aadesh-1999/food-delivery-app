import { useEffect, useState } from "react";
import { swiggyResMenuURL } from "../utils/constants";
import ShimmerCards from "./ShimmerCards";
import { useParams } from "react-router";

const RestraurantMenu = () => {

    const [resName,setResName]=useState("");
    const [restMenu, setRestMenu]=useState(null);

    const params=useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        console.log(swiggyResMenuURL+params?.resId);
        const res = await fetch(swiggyResMenuURL+params.resId);
        const resJson = await res.json();
        setRestMenu(resJson.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
        setResName(resJson.data?.cards[0]?.card.card.info.name);
    }

    if(restMenu===null) return(<ShimmerCards/>);

    return(
        <div className="rest-menu-container" style={{"margin":"50px"}}>
            <div className="rest-menu-heading">
                <h1>{resName}</h1>
            </div>
            <div className="rest-menu">
                {
                    restMenu?.itemCards?.map(
                        (menu)=>{
                            return (
                                <li key={menu?.card?.info?.id}>
                                    {menu?.card?.info?.name} - Rs. {menu?.card?.info?.price/100}
                                </li>
                            )
                        }
                    )
                }
            </div>
        </div>
    );
}

export default RestraurantMenu;