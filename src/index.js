import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { makeServer } from "./server";
import {ProductProvider} from "./context/productcontext";
import {CartProvider} from "./context/cartcontext";
import { WishListProvider } from "./context/wishlistcontext";
import {AuthProvider} from './context/auth-context'
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
    <WishListProvider>
    <ProductProvider>
      <AuthProvider>

    <App />
      </AuthProvider>
    </ProductProvider>
    </WishListProvider>
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
