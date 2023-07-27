import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

//App structure
// *Header
//     logo
//     NavItems
// *Body
//     Search
//     RestraurantContainer
//         RestraurantCard
// -img
// -Name of restraurant, Star Rating, Cuisine, etc.
// *Footer
//     Copyright
//     Links
//     Address
//     Contact

const root = ReactDOM.createRoot(document.getElementById("root"));

// RestraurantCards.defaultProps = {
//     rating: "4.9",
//     time: "30 mins"
//   }

const appLayout = (
  <div className="app">
    <Header />
    <Body />
  </div>
);

root.render(appLayout);
