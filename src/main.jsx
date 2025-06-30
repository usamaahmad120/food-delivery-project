import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UseContext from "./usecontext/UseContext.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/Store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <UseContext>
      <App />
    </UseContext>
  </Provider>
);
