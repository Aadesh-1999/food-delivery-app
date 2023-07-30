import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
// import About from "./src/components/About";
import Contact from "./src/components/Contact";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestraurantMenu from "./src/components/RestraurantMenu";
import Error from "./src/components/Error";
// import Grocery from "./src/components/Grocery";

//Lazy Loading //use Lazy and suspense to make app optimised and reduce loading time by dividing single bundle into multiple buldles
const Grocery = lazy(()=>import("./src/components/Grocery")) ;
const About = lazy(()=>import("./src/components/About"));

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
        element:<Suspense fallback={<h1>Loading..</h1>}><About/></Suspense>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restraurantMenu/:resId",
        element:<RestraurantMenu/>
      },
      {
        path:"/grocery",
        element:<Suspense  fallback={<h1>Loading..</h1>}><Grocery/></Suspense>
      }
    ],
    errorElement:<Error/>
  }
]);

root.render(<RouterProvider router={appRouter}/>);
