import React, {useEffect, useState} from 'react';
// import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import {useCart} from "../../context/cartcontext"
import cartitems from '../../components/Cart/cartitems';
import "./Cart.css"
import { useAuth } from '../../context/auth-context';
import axios from 'axios';
export const Cart = () => {
  const { cartItems, setCartItems, incrementQuantity,decrementQuantity, removeFromCart} = useCart();
const {auth} = useAuth();
// const [cart, setCart] = useState();
useEffect(() => {
  const data = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "/api/user/cart",
        headers: { authorization: auth.token },
      });
      console.log(response)
     setCartItems(response.data.cart)
    } catch (err) {
      console.log(err.response);
    }
  };
  data();
}, []);

const calculatePrice = (itemsAdded) => {
  return [...itemsAdded].reduce(
    (acc, curr) => Number(acc) + curr.price * curr.qty,
    0
  );
};
console.log()

const addToWishlist = async (product, auth) => {
  console.log(auth.token)
  if(!auth.user){
    navigate("/Login")

    }else{
      try {
        const response = await axios({
          method: "post",
          url: "/api/user/wishlist",
          headers: { authorization: auth.token },
          data: { product: product },
        });
      //   setWishlist(response.data.cart);
        setWishlist(response.data.wishlist);
      console.log(response)
      } catch (err) {
        console.log(err.response);
      }
    }
  
};
  return (
    <div>
        <h1 class="description">Cart({cartItems.length})</h1>
      {cartItems?.map(item => {
        
        return <div class="horizontal-card">
          <div class="horizontal-card-image">
            <img
              src={item.image}
              alt="product-image"
              class="product-card-img"
            />
          </div>
          <div class="horizontal-card-sectionTwo flex-col">
            <div class="horizontal-card-content">
              <h3 class="vertical-card-content-one margin-top-bottom-zero">
                levis
              </h3>
              <h4 class="vertical-card-content-two margin-top-bottom-zero">
                {item.title}
              </h4>
              <div class="vertical-card-content-three flex-start-row">
                <p class="margin-top-bottom-zero current-price">{item.price}</p>
              </div>
              <div class="quantity-section flex">
                <span>quantity:</span>
                <button class="incre-decre-btn flex-row-center" onClick={()=>decrementQuantity(item, auth.token)}>
                  -
                </button>
                <span class="quantity">{item.qty}</span>
                <button class="incre-decre-btn" onClick={()=>incrementQuantity(item, auth.token)}>
                  +
                </button>
              </div>
            </div>
            <div class="horizontal-card-btn flex-col-center">
              {/* <button class="primary-btn-md-two">Remove from cart</button> */}
              <a className="btn btn-primary-solid" onClick={() => removeFromCart(item, auth.token)}>Remove from Cart</a>
            </div>
          </div>
        </div> 
      })}
        
        <div class="cart-page__cart-price">
                <h4>Price Info</h4>
                <div class="cart-price">
                  <div class="cart-price__item">
                    <span> Total Price</span>
                    <span>{calculatePrice(cartItems)}</span>
                  </div>
                  <div class="cart-price__item">
                    <span> Discount </span>
                    <span>400</span>
                  </div>
                  <div class="cart-price__item">
                    <span>Price After Discount </span>
                    <span>{calculatePrice(cartItems)- 400}</span>
                  </div>
                  <div class="cart-price__button">
                    <button class="btn btn-primary-solid">Buy Now</button>
                </div>
                </div>
              </div>      
    </div>
  )
}
