import React, { Component, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root.jsx";
import Erorrpage from "../pages/ErorrPage/Erorrpage";
import Home from "../pages/Home/Home";
import App from "../pages/App/App";
import Install from "../pages/Installapp/Install";
import Appdetails from "../pages/AppDetails/Appdetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Erorrpage></Erorrpage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("deta.json"),
        Component: Home,
      },
      {
        index: true,
        path: "/app",
        loader: () => fetch("deta.json"),
        Component: App,
      },
      {
        index: true,
        path: "/Install",
        Component: Install,
      },
      {
        index: true,
        path: "/Install/:id",
        loader: () => fetch("deta.json"),
        Component: Appdetails,
      },
      {
        index: true,
        path: "/Appdetails/:id",
        loader: () => fetch("deta.json"),
        Component: Appdetails,
      },
    ],
  },
]);
