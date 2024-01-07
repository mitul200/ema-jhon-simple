import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./component/Shop/Shop.jsx";
import Home from "./component/layout/Home.jsx";
import Orders from "./component/Orders/Orders.jsx";
import Inventory from "./component/Inventory/Inventory.jsx";
import Login from "./component/Login/Login.jsx";
import cartProductsLoder from "./loders/cartProductsLoder.js";
import CheckOut from "./component/CheckOut/CheckOut.jsx";
import SingUp from "./component/SingUp/SingUp.jsx";
import AuthProvider from "./component/Provider/AuthProvider.jsx";
import PrivetRoute from "./component/Routs/PrivetRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: cartProductsLoder,
      },
      {
        path: "inventory",
        element: <PrivetRoute><Inventory></Inventory></PrivetRoute>,
      },
      {
        path: "checkout",
        element: <PrivetRoute><CheckOut></CheckOut></PrivetRoute>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "singup",
        element: <SingUp></SingUp>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
