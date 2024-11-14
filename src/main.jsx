import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import Banner from "./components/Banner";
import Statistics from "./components/Statistics";
import Dashboard from "./components/Dashboard";
import CardContainer from "./components/CardContainer";
import Card from "./components/Card";
import ProductDetails from "./components/ProductDetails";
import Faq from "./components/Faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
        children: [
          {
            path: "/",
            element: <CardContainer></CardContainer>,
            children: [
              {
                path: ":userId",
                element: <Card></Card>,
              },
            ],
          },
        ],
      },

      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: ":category/:product_id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
