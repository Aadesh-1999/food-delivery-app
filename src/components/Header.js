import { useContext, useState } from "react";
import AppLogo from "../../assets/AppLogo.png";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [isLogin,setIsLogin]=useState(false);
    const userData = useContext(UserContext);

    //Subscribing to store using selector
    const cartItems = useSelector((store)=>store.cart.items);
    // console.log("cartItems : ",cartItems);
    return (
      <>
        <div className="header flex justify-between">
          <div className="logoContainer">
            <img className="appLogo w-56" src={AppLogo} alt="LOGO" />
          </div>
          <div className="navContainer">
            <ul className="flex p-5 m-5">
              <li className="m-5">
                <Link to="/">Home</Link> 
              </li>
              <li className="m-5">
                <Link to="/about">About</Link> 
              </li>
              <li className="m-5">
                <Link to="/contact">Contact</Link> 
              </li>
              <li className="m-5">
                <Link to="/grocery">Grocery</Link>
              </li>
              <li className="m-5 border border-black px-5">
                <Link to="/cart" className="font-extrabold p-2">
                  Cart({cartItems.length})
                </Link>
              </li>
              <li className="m-5">
                <button onClick={()=>{setIsLogin(!isLogin)}}>{isLogin ? "Logout" : "Login"}</button>
              </li>
              <li className="m-5">
                <h3 className="text-purple-700">
                  {userData.login_user}
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  };

export default Header;