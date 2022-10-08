import "./App.css";
import logo from "./logo.png";
import {Routes, Route} from "react-router-dom";
import{Cart, Homepage, Login, SignUp, Wishlist} from "./pages/index";
import { Product } from "./pages/Product/Product";
import Mockman from 'mockman-js'
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/Product" element={<Product/>} />
      <Route path="/Cart" element={<Cart/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/Wishlist" element={<Wishlist/>} />
      <Route path="/mock" element={<Mockman/>} />
      </Routes>
    </div>
  );
}

export default App;