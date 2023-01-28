import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvide from "./context/themeContext";
import AuthContextProvide from "./context/AuthContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvide>
      <AuthContextProvide>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthContextProvide>
    </ThemeContextProvide>
  </React.StrictMode>
);
