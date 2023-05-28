// ## Namaste React Course by Akshay Saini
// Chapter 04 - Talk is Cheap, show me the code

import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { FooterElement } from "./components/layOut";
import { BodyTags } from "./components/bodyElements";
import { AboutPageMain } from "./components/about";
import { HeaderCreate } from "./components/header";
import ErrorComponent from "./components/error";
// AppLayout component to show: Header, Body, Footer

const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderCreate />
      <Outlet />
      <FooterElement />
    </React.Fragment>
  );
};

const allRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/",
        element: <BodyTags />,
      },
      {
        path: "/about",
        element: <AboutPageMain />,
      },
      {
        path: "/contact",
        element: <AboutPageMain />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root-card"));

root.render(<RouterProvider router={allRoute} />);

/*
Features to add in futures

1. add to carts
2. When click on dish it add to cart button visible to it

*/
