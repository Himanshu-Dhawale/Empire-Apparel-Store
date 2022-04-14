import React from 'react';
import {useCart} from "../../context/cartcontext"
import cartitems from '../../components/Cart/cartitems';
import "./Cart.css"
import { useAuth } from '../../context/auth-context';
export const Cart = () => {
  // const { cartItems } = useCart();
const {auth} = useAuth();
console.log(auth.user)
  return (
    <div>
      <div className=" card card_vertical"></div>
      {/* {cartItems.map((item) => (
          <CartItem key={item.id} cartitem={item} />
        ))} */}
        <h1 class="description">Cart(4)</h1>
        <div class="main-content">
            <div class="card-container">
            <div class=" card card__vertical">
                <div class="image-container-vert">
                    <img class="img responsive-image"
                        src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                        alt="hoodie"/>
                    <i class='bx bxs-heart wishlist-icon-vert'></i>

                </div>
                <div class="text-btn-container">
                    <div class="text-container vertical-text">
                        <p class="quiet">Essential</p>
                        <h4 class="card-title">Men's White T-Shirt</h4>
                        <p>Men's Wear <span> | Sold by: H&M</span> </p>
                        <h6><strong>$100 </strong><strike>$200</strike></h6>
                    </div>
                    <div class="btn-container cta-btn">
                        <a class="btn btn-primary-solid">Add to Cart</a>
                    </div>
                </div>
            </div>
    </div>
    </div>
    </div>
  )
}
