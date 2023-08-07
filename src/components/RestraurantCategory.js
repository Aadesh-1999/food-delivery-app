import { useState } from "react";
import { MenuItemList } from "./menuItemList";

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
                            showItems ? <MenuItemList key={itemCard?.card?.info?.id} itemCard={itemCard}/> : <div key={itemCard?.card?.info?.id}></div>
                        )
                    }
                )
            }
        </div>
    )
}

export default RestraurantCategory;