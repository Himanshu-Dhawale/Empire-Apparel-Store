import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useCart } from '../../context/cartcontext';
import { useWish } from '../../context/wishlistcontext';

export const Navbar = () => {
 const { cartItems } = useCart();
 const { wishlist } = useWish();
 const [cartCount, setCartCount] = useState();
 const [wishlistCount, setWishListCount] = useState();

 useEffect(() => {
  setCartCount(cartItems.length);
}, [cartItems]);

useEffect(() => {
  setWishListCount(wishlist.length);
}, [wishlist]);

  return (
    <div>
    <nav className="nav-bar">
    <div className="nav-title">Empire Apparel Store</div>
    <button className="nav-icon"><Link to="/Login"><i className='bx bxs-user'></i></Link></button>
    <button className="nav-icon"><Link to="/Wishlist"><div class="badge_container icon_container">
<i class='bx bxs-heart'></i>
<span class="badge icon-badge ">{wishlistCount}</span>
</div></Link></button>
    <button className="nav-icon"><Link to="/Cart"><div class="badge_container icon_container">
<i class='bx bxs-cart'></i>
<span class="badge icon-badge ">{cartCount}</span>
</div></Link></button>
    </nav>
    </div>
  )
}