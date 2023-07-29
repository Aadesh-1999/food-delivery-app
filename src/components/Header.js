
import { useState } from "react";
import AppLogo from "../../assets/AppLogo.png";

const Header = () => {

    const [isLogin,setIsLogin]=useState(false);
    const btnName="Login";

    return (
      <>
        <div className="header">
          <div className="logoContainer">
            <img className="appLogo" src={AppLogo} alt="LOGO" />
          </div>
          <div className="navContainer">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li><button onClick={()=>{setIsLogin(!isLogin)}}>{isLogin ? "Logout" : "Login"}</button></li>
            </ul>
          </div>
        </div>
      </>
    );
  };

export default Header;