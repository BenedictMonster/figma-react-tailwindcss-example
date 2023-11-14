import React from "react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import Page1 from "./page1";
import Page2 from "./page2";
import "./main.css";

function Plugin() {
  return (
    <MemoryRouter initialEntries={["/page1"]}>
      <Routes>
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
      </Routes>
    </MemoryRouter>
  );
}

export default Plugin;
