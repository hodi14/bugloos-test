import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";

import reportWebVitals from "./reportWebVitals";

import themeConfig from "./configs/theme";
import App from "./App";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={themeConfig}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);

reportWebVitals();
