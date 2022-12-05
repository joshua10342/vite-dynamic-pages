import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Market from "./pages/Market";
import Contact from "./pages/Contact";
import Stats from "./pages/Stats";
import PageNotFound from "./pages/404";

const root = ReactDOM.createRoot(
  // eslint-disable-next-line no-undef
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<Market />} />
        <Route path="/market/stats/:id" element={<Stats />} />
        <Route path="/market/stats" element={<Stats />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
