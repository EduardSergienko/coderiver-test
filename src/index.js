import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "/node_modules/modern-normalize/modern-normalize.css";
import "./basic.scss";
import "./custom-swiper-styles.scss";

import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
