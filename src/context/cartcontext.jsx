import { createContext, useContext, useState } from 'react';
import axios  from 'axios';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const incrementQuantity = async (product, token) => {
    const productId = product._id;
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        { action: { type: "increment" } },
        { headers: { authorization: token } }
      );
      console.log(response.data.cart);
      setCartItems(response.data.cart);
    } catch (err) {
      console.log(err);
    }
  };
  const decrementQuantity = async (product, token) => {
    const productId = product._id;
    try {
      const response = await axios.post(
        `/api/user/cart/${productId}`,
        { action: { type: "decrement" } },
        { headers: { authorization: token } }
      );
      console.log(response.data.cart);
      setCartItems(response.data.cart);
    } catch (err) {
      console.log(err.response);
    }
  };
  const removeFromCart = async (product, token) => {
    const productId = product._id;
    try {
      const response = await axios.delete(`/api/user/cart/${productId}`, {
        headers: { authorization: token },
      });
      setCartItems(response.data.cart);
    } catch (err) {
      console.log(err)
    }
  };
  
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, incrementQuantity, decrementQuantity, removeFromCart}}>
      {children}
    </CartContext.Provider>
  );
  
};
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
