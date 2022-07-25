import React from 'react'
import "./ShopNow.css"
import { Link } from 'react-router-dom'
import { useProduct } from '../../context/productcontext'
export const ShopNow = () => {

  const { productsDispatch} = useProduct();

  return (
    <div>
         <div className="landing-page-container">

<img  className="landing-image" src="https://images.pexels.com/photos/6311260/pexels-photo-6311260.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""/>           

<div className="landing-text">The Fashion Brand</div>

<Link to="/Product"><button className="btn btn-primary-outline landing-button landing-button_link">Buy Now</button>
</Link>

<h1 className="deal-heading">Deals of the day</h1>
<div className="deals-of-the-day flex-row-center">
<Link to='/Product'>

<div className="deals-image"  onClick={() => productsDispatch({type:"WOMENS_CLOTHING"})}>

<img src="https://images.pexels.com/photos/6311139/pexels-photo-6311139.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="p/roduct" />
<p className="deals-text"> woman upto 20% off</p>
</div>
</Link>
<Link to="/Product">
<div className="deals-image" onClick={() => productsDispatch({type:"MENS_CLOTHING"})}>
<img src="https://images.pexels.com/photos/8151701/pexels-photo-8151701.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="p/roduct" />
<p className="deals-text">Men's upto 40% off</p>
</div>
</Link>
<div className="deals-image">
<img src="https://images.pexels.com/photos/428311/pexels-photo-428311.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="p/roduct" />
<p className="deals-text">upto 65% off</p>
</div> 
<div className="deals-image">
<img src="https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="p/roduct" />
<p className="deals-text">upto 70% off</p>
</div> 
</div>
</div>
    </div>
  )
}
