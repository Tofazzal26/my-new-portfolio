import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import "../src/Pages/Scrollbar/Scrollbar.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router/Router";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </React.StrictMode>
);
