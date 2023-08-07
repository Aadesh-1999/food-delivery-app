import { Selector, useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import {MenuItemList, CartMenuItemList } from "./menuItemList";

const Cart=()=>{

    const cartItems = useSelector((store)=>store.cart.items);

    const CartItemList = CartMenuItemList(MenuItemList);

    const dispatch=useDispatch();

    const clearTheCart = () => {
        dispatch(clearCart());
    };

    console.log("cartItems : ",cartItems);
    return(
        <div className="m-auto border border-pink-400 w-6/12">
            <button className="border border-black rounded-2xl bg-blue-200 m-5 px-5 py-2"
                onClick={clearTheCart}
            >Clear Cart</button>
            {
                cartItems.length==0 && <h1 className="m-5 mx-10 p-2 font-extrabold border-b-2 border-t-2 border-red-600">Add Items to Cart</h1>
            }
            {cartItems.map(
                (cartItem,index)=>{
                    return (
                        <h1 className="m-5 mx-10 p-2 border border-black" key={index}>
                            <CartItemList itemCard={cartItem} isCart={true}/>
                        </h1>
                    );
                }
            )}
        </div>
    );
}

export default Cart;