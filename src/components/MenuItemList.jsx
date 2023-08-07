// import { cardImgCdn } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { cardImgCdn } from "../utils/constants";

export const MenuItemList = ({itemCard, isCart=false}) => {

    const dispatch = useDispatch();

    const handleAdd = (cartItem) => {
        //dispatch an action
        // console.log("dispatching : ",cartItem); 
        dispatch(addItem(cartItem));
    }

    const handleRemove = (cartItem) => {
        //dispatch an action
        dispatch(removeItem(cartItem));
    }

    return(
        <div className="flex justify-between w-full">
            <li className="font-bold font-mono my-2 px-2 flex justify-between align-middle w-full border-black border-b-2 p-2">
                <span className="pt-10">
                    {itemCard?.card?.info?.name} - ₹ {itemCard?.card?.info?.price/100}
                </span>
                <span className="w-32 h-32 relative">
                    <img src={cardImgCdn+itemCard?.card?.info?.imageId} alt="Loading.." className="object-cover bg-pink-200 border border-white rounded-lg"/>
                    {
                        !isCart && <button className="bg-black text-white font-extrabold rounded-lg border border-white w-9 absolute top-0 right-0"
                            onClick={()=>{handleAdd(itemCard);}}
                        >+</button>}
                    {   
                        isCart && <button className="bg-black text-white font-extrabold rounded-lg border border-white w-9 absolute top-0 right-0"
                            onClick={()=>{handleRemove(itemCard);}}
                        >-</button>
                    }
                </span>
            </li>
        </div>
    );
}

export const CartMenuItemList = (MenuItemList) => {
    return (props) => {
        return(
            <div>
                <MenuItemList {...props}/>
            </div>
        );
    }
}

export default MenuItemList;