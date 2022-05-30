import { createContext, useContext, useState } from 'react';

const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishItem = (product) => {
    if (doesExist(product.id)) {
      setWishlist((list) => list.filter((e) => e.id !== product.id));
    } else {
      setWishlist((list) => [...list, product]);  
    }
  };

  const doesExist = (id) => wishlist.some((e) => e.id === id);

  return (
    <WishListContext.Provider value={{ wishlist, toggleWishItem, doesExist, setWishlist }}>
      {children}
    </WishListContext.Provider>
  );
};
const useWish = () => useContext(WishListContext);

export { useWish, WishListProvider };
