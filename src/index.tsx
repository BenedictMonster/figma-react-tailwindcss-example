import React from "react";
import ReactDOM from "react-dom/client";
import Plugin from "./main";
import "./main.css";

document.addEventListener("DOMContentLoaded", () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Plugin />);
});
