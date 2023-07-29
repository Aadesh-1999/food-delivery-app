import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestraurantMenu from "./src/components/RestraurantMenu";
import Error from "./src/components/Error";

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

const AppLayout = () => {
  return(
  <div className="app">
    <Header />
    <Outlet/>
  </div>)
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restraurantMenu/:resId",
        element:<RestraurantMenu/>
      }
    ],
    errorElement:<Error/>
  }
]);

root.render(<RouterProvider router={appRouter}/>);
