import React from "react";

import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client"; // 👈️ wrong import path
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
