import "./App.css";
import logo from "./logo.png";
import {Routes, Route} from "react-router-dom";
import {Navbar} from "./components/Navbar/Navbar";
import{Cart, Homepage, Login, SignUp, Wishlist} from "./pages/index";
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