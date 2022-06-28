import React from "react";
import "./common/styles.scss";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./app";

createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").then((r) => {
      console.log("ServiceWorker registration succeeded with scope: ", r.scope)
    }).catch((e) => {
      console.error("ServiceWorker registration failed with error: ", e)
    });
  })
}