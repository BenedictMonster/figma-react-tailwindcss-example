import React from "react";
import ReactDOM from "react-dom/client";
import UIApp from "./app";

document.addEventListener("DOMContentLoaded", () => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<UIApp />);
});
