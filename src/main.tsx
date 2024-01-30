import React from "react";
import ReactDOM from "react-dom/client";
import "./components/css/index.css";
import Card from "./components/card";
import Shadow from "./components/shadow";

ReactDOM.createRoot(document.querySelector(".container") as HTMLElement).render(
  <React.StrictMode>
    <Card />
    <Shadow />
  </React.StrictMode>
);
