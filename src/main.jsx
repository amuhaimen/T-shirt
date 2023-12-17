import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout.jsx";
import Home from "./components/home/Home.jsx";
import OrderReview from "./components/orderReview/OrderReview.jsx";
import GrandPa from "./components/grandpa/GrandPa.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("tshirts.json"),
      },
      {
        path: "review",
        element: <OrderReview />,
      },
      {
        path: "grandpa",
        element: <GrandPa />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
