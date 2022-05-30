import React, { useEffect, useState } from 'react';
import { useAuth } from '../../context/auth-context';
import axios from 'axios';
import { useWish } from '../../context/wishlistcontext';

// import "./Wishlist.css"
export const Wishlist = () => {
  const { auth } = useAuth();
  const {wishlist, setWishlist} = useWish();
  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios({
          method: "get",
          url: "/api/user/wishlist",
          headers: { authorization: auth.token },
        });
        // console.log(response.data.wishlist)
        setWishlist(response.data.wishlist)
      } catch (err) {
        console.log(err.response);
      }
    };
    data();
  }, []);

  return (
    <div>

      <h1 class="description">My Wishlist({wishlist.length})</h1>
      {wishlist.map((item) => {
       return <div key={item._id} class="main-content">

          <div class=" card card__vertical">
            <div class="image-container-vert">
              <img class="img responsive-image"
                src={item.image}alt="hoodie" />
              <i class='bx bxs-heart wishlist-icon-vert'></i>

            </div>
            <div class="text-btn-container">
              <div class="text-container vertical-text">
                <p class="quiet">Essential</p>
                <h4 class="card-title">Men's White T-Shirt</h4>
                <p>Men's Wear <span> | Sold by: H&M</span> </p>
                <h6><strong>${item.price}</strong><strike>$200</strike></h6>
              </div>
              <div class="btn-container cta-btn">
                <a class="btn btn-primary-solid">Add to Cart</a>
              </div>
            </div>
          </div>
        </div>
      })}
    </div>
  )
}
