import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import ShimmerMoreRest from "./components/ShimmerMoreRest.js";
import RestaurantMenuAccordian from "./components/RestaurantMenuAccordian.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";
const AppLayout = () => {
  const [isHomePressed, setIsHomePressed] = useState(0);

  return (
    <div className="app">
      <Provider store={appStore}>
        <Header onClickHandler={setIsHomePressed} />
        <Outlet key={isHomePressed} />
      </Provider>
      <Footer />
    </div>
  );
};

const Grocery = lazy(() => import("./components/Grocery.js"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<ShimmerMoreRest />}>
            {" "}
            <Grocery />{" "}
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:restId",
        element: <RestaurantMenuAccordian />,
      },
      ,
      {
        path: "/*",
        element: <Error />, // Define a NotFoundComponent for unmatched routes
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
