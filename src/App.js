import "./App.css";
import logo from "./logo.png";
import {Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import {Cart} from "./pages/Cart/Cart";
import {Homepage} from "./pages/Homepage/Homepage";
import {Login} from "./pages/Login/Login";
import {SignUp} from "./pages/SignUp/SignUp";
import {Wishlist} from "./pages/Wishlist/WishList";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/Cart" element={<Cart/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/Wishlist" element={<Wishlist/>} />
      </Routes>
    </div>
  );
}

export default App;