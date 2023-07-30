import { useState } from "react";
import AppLogo from "../../assets/AppLogo.png";
import { Link } from "react-router-dom";

const Header = () => {

    const [isLogin,setIsLogin]=useState(false);

    return (
      <>
        <div className="header">
          <div className="logoContainer">
            <img className="appLogo" src={AppLogo} alt="LOGO" />
          </div>
          <div className="navContainer">
            <ul>
              <li>
                <Link to="/">Home</Link> 
              </li>
              <li>
                <Link to="/about">About</Link> 
              </li>
              <li>
                <Link to="/contact">Contact</Link> 
              </li>
              <li>
                <Link to="/grocery">Grocery</Link>
              </li>
              <li><button onClick={()=>{setIsLogin(!isLogin)}}>{isLogin ? "Logout" : "Login"}</button></li>
            </ul>
          </div>
        </div>
      </>
    );
  };

export default Header;