import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import {ProductProvider} from "./context/productcontext"
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProductProvider>
    <App />
    </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
