import React, {useEffect, useState} from 'react';
import {useCart} from "../../context/cartcontext"
import cartitems from '../../components/Cart/cartitems';
import "./Cart.css"
import { useAuth } from '../../context/auth-context';
import axios from 'axios';
export const Cart = () => {
  const { cartItems, setCartItems } = useCart();
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

 const removeFromCart = async(item) => {
   try{
      const response = await axios({
        method: "delete",
        url: `/api/user/cart/${item}`,
        headers: { authorization: auth.token },
      });
      console.log(response.data.cart)
      setCartItems(response.data.cart)

   }catch(err){
     console.log(err)
   }
 }


  return (
    <div>
        <h1 class="description">Cart({cartItems.length})</h1>
      <div className=" card card_vertical"></div>
      {cartItems?.map((item) => (
        // <img src={item.image} alt="" />
        <div key={item._id}>
                    <div className="product-section">
                        <div className=" card card__vertical">
                            <div className="image-container-vert">
                                <img className="img responsive-image"
                                    src={item.image}
                                    alt="hoodie" />
                                <i className='bx bxs-heart wishlist-icon-vert'></i>

                            </div>
                            <div className="text-btn-container">
                                <div className="text-container vertical-text">
                                    <p className="quiet">Essential</p>
                                    <h4 className="card-title">Men's White T-Shirt</h4>
                                    <p>Men's Wear <span> | Sold by: H and M</span> </p>
                                    <h6><strong>${item.price} </strong><strike>$200</strike></h6>
                                </div>
                                <div className="btn-container cta-btn">
                                    <a className="btn btn-primary-solid" onClick={() => removeFromCart(item._id)}>Remove to Cart</a>
                                    <a className="btn btn-primary-solid" onClick={() => toggleWishItem(item)}>Add to Wishlist</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        ))}        
    </div>
  )
}
