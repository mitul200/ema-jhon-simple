/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckOut from "./component/CheckOut/CheckOut.jsx";
import Inventory from "./component/Inventory/Inventory.jsx";
import Home from "./component/layout/Home.jsx";
import Login from "./component/Login/Login.jsx";
import Orders from "./component/Orders/Orders.jsx";
import AuthProvider from "./component/Provider/AuthProvider.jsx";
import PrivetRoute from "./component/Routs/PrivetRoute.jsx";
import Shop from "./component/Shop/Shop.jsx";
import SingUp from "./component/SingUp/SingUp.jsx";
import "./index.css";
import cartProductsLoder from "./loders/cartProductsLoder.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
        loader: () => fetch("http://localhost:5000/totalproducts"),
      },
      {
        path: "orders",
        element: <Orders></Orders>,
        loader: cartProductsLoder,
      },
      {
        path: "inventory",
        element: (
          <PrivetRoute>
            <Inventory></Inventory>
          </PrivetRoute>
        ),
      },
      {
        path: "checkout",
        element: (
          <PrivetRoute>
            <CheckOut></CheckOut>
          </PrivetRoute>
        ),
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
