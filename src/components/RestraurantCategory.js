import { useState } from "react";
import { cardImgCdn } from "../utils/constants";

const RestraurantCategory = (props) => {

    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    }

    return(
        <div>
            <button className="font-bold font-mono text-pink-900 flex justify-between w-full"
                onClick={handleClick}
            >
                <h3>
                    {props.category?.title}
                </h3>
                <h3>
                    {showItems ? "⬆" : "⬇"}
                </h3>
            </button>
            {
                
                props.category?.itemCards?.map(
                    (itemCard)=>{
                        return (
                            showItems ? <div className="flex justify-between w-full" key={itemCard?.card?.info?.id}>
                                <li className="font-bold font-mono my-2 px-2 flex justify-between align-middle w-full border-black border-b-2 p-2">
                                    <span className="pt-10">
                                        {itemCard?.card?.info?.name} - ₹ {itemCard?.card?.info?.price/100}
                                    </span>
                                    <span className="w-32 h-32 relative">
                                        <img src={cardImgCdn+itemCard?.card?.info?.imageId} alt="Loading.." className="object-cover bg-pink-200 border border-white rounded-lg"/>
                                        <button className="bg-black text-white font-extrabold rounded-lg border border-white w-9 absolute top-0 right-0">+</button>
                                    </span>
                                </li>
                            </div> : <div key={itemCard?.card?.info?.id}></div>
                        )
                    }
                )
            }
        </div>
    )
}

export default RestraurantCategory;