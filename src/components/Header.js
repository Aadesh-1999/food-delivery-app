
import AppLogo from "../../assets/AppLogo.png";

const Header = () => {
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
            </ul>
          </div>
        </div>
      </>
    );
  };

export default Header;