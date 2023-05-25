// ## Namaste React Course by Akshay Saini
// Chapter 04 - Talk is Cheap, show me the code

import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { FooterElement, CreateSingleCard } from "./components/layOut";
import { BodyTags } from "./components/bodyElements";
import { AboutPageMain } from "./components/about";
import { HeaderCreate } from "./components/header";

// AppLayout component to show: Header, Body, Footer
const AppLayout = () => {
  return (
    <React.Fragment>
      <HeaderCreate />
      <BodyTags />
      <FooterElement />
    </React.Fragment>
  );
};

const allRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <AboutPageMain />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root-card"));

root.render(<RouterProvider router={allRoute} />);
