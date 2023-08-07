import { useEffect } from "react";
import { cardImgCdn } from "../utils/constants";

export const RestraurantCard = (props) => {

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
        props?.restaurant?.info;
    return (
        <div className="restraurentCard w-72 h-[425px] p-1 m-2 border-solid border-2 border-gray-500 hover:border-black rounded-lg" style={styleCard}>
            <div className="cardLogoContainer align-middle grid justify-items-center my-2">
                <img
                className="cardLogo w-64 h-60 rounded-2xl border-solid border-2 border-gray-500"
                src={
                    cardImgCdn +
                    cloudinaryImageId
                }
                alt="Biryani"
                />
            </div>
            <h4 className="cardHeader my-2 font-bold text-center">{name}</h4>
            <h4 className="font-light text-slate-800 my-1">{cuisines.join(", ")}</h4>
            <h4>{costForTwo} | Rating : {avgRating} *</h4>
            <h4>
                Delivery Time : {sla.slaString} for {sla.lastMileTravelString}
            </h4>
        </div>
    );
};

//Higher order component 
export const DessertsRestraurantCard = (RestraurantCard) => {
    return (props) => {
        return(
            <div>
                <label className="w-72 p-1 mx-2 border-solid border-2 border-red-400 hover:border-black rounded-lg">
                    Has Desserts ⬇
                </label>
                {/* pass recived props as it is  */}
                <RestraurantCard {...props}/>
            </div>
        );
    }
}

const styleCard = {
    backgroundColor: "#f0f0f0",
};

export default RestraurantCard;