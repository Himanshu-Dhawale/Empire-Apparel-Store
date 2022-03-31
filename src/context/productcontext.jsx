import { useContext, createContext, useReducer } from "react";
import { useState } from 'react';

import { reducer } from "../reducer/product-reducer";
  

  

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState([]);

    const [
      {
        price,
        rating,
        category,
        sortBy,
        range
      },
      productsDispatch
    ] = useReducer(reducer, {
      range:null,
      sortBy: null,
      price: null,
      category: {
        mensclothing: false,
        womensclothing: false,
      },
      rating: null,
    })

    return (
        <ProductContext.Provider
          value={{
            productsDispatch,
              product,
              setProduct,
            sortBy,
            price,
            rating,
          category,
          range,
            productsDispatch
          }}
        >
          {children}
        </ProductContext.Provider>
      );
}

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
