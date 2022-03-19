import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
    <nav class="nav-bar">
    <div class="nav-title">Title</div>
    <button class="nav-icon"><Link to="/Login"><i class='bx bxs-user'></i></Link></button>
    <button class="nav-icon"><Link to="/Wishlist"><i class='bx bxs-heart'></i></Link></button>
    <button class="nav-icon"><Link to="/Cart"><i class='bx bxs-cart'></i></Link></button>
    </nav>
    </div>
  )
}