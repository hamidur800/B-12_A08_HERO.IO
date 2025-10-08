import React, { Component, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Erorrpage from "../pages/ErorrPage/Erorrpage";
import Home from "../pages/Home/Home";
import App from "../pages/App/App";
import Install from "../pages/Installapp/Install";
import { HiH2 } from "react-icons/hi2";

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
        element: (
          <Suspense fallback={<Erorrpage></Erorrpage>}>
            <Home></Home>
          </Suspense>
        ),
      },
      {
        index: true,
        path: "app",
        Component: App,
      },
      {
        index: true,
        path: "Install",
        Component: Install,
      },
    ],
  },
]);
