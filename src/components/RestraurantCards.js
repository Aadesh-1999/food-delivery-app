import { useEffect } from "react";
import { cardImgCdn } from "../utils/constants";

const RestraurantCards = (props) => {

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
        props?.restaurant?.info;
    return (
        <div className="restraurentCard" style={styleCard}>
        <div className="cardLogoContainer">
            <img
            className="cardLogo"
            src={
                cardImgCdn +
                cloudinaryImageId
            }
            alt="Biryani"
            />
        </div>
        <h4 className="cardHeader">{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} *</h4>
        <h4>{costForTwo}</h4>
        <h4>
            Delivery Time : {sla.slaString} for {sla.lastMileTravelString}
        </h4>
        </div>
    );
};


const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  

export default RestraurantCards;