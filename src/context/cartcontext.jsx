import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    let isProductAvailable = false;

    let newCart = cartItems.map((item) => {
      if (item.id === product.id) {
        isProductAvailable = true;
        return { ...item, quantity: (item.quantity += 1) };
      } else {
        return item;
      }
    });
    if (!isProductAvailable) {
      newCart = [...cartItems, { ...product, quantity: 1 }];
    }
    setCartItems(newCart);
  };

  const removeFromCart = (cartitem) => {
    if (cartitem.quantity === 1) {
      setCartItems((c) => c.filter((item) => item.id !== cartitem.id));
    } else {
      const updatedCart = cartItems.map((item) => {
        if (item.id === cartitem.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      setCartItems(updatedCart);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
