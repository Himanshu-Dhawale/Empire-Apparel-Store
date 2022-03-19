import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
    <nav className="nav-bar">
    <div className="nav-title">Title</div>
    <button className="nav-icon"><Link to="/Login"><i className='bx bxs-user'></i></Link></button>
    <button className="nav-icon"><Link to="/Wishlist"><i className='bx bxs-heart'></i></Link></button>
    <button className="nav-icon"><Link to="/Cart"><i className='bx bxs-cart'></i></Link></button>
    </nav>
    </div>
  )
}