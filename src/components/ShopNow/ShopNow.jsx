import React from 'react'
import "./ShopNow.css"
import { Link } from 'react-router-dom'
import { useProduct } from '../../context/productcontext';
import {Navbar} from '../Navbar/Navbar'
export const ShopNow = () => {

  const { productsDispatch} = useProduct();

  return (
    <div>
      <Navbar/>
         <div className="landing-page-container">

{/* <img  className="landing-image" src="https://images.pexels.com/photos/6311260/pexels-photo-6311260.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt=""/>            */}

<div className="landing-text">The Fashion Brand</div>

<Link to="/Product"><button className="btn btn-primary-outline landing-button landing-button_link">Buy Now</button>
</Link>
</div>
<h1 className="deal-heading">Top Categories</h1>
<div className="deals-of-the-day flex-row-center">
<Link to='/Product'>

<div className="deals-image"  onClick={() => productsDispatch({type:"WOMENS_CLOTHING"})}>

<img src="https://cdn3.mydukaan.io/app/image/500x500/?url=https://dukaan-us.s3.amazonaws.com/6963100/96a02c56-db7d-4dd4-a1c3-9cd0850e0181/frame-20-811b60f6-85c5-4c8c-aa62-1e93b5d28307-ba72b9eb-eb23-421e-9ec8-57d032d1dec2.png" alt="p/roduct" />
<p className="deals-text"> woman upto 20% off</p>
</div>
</Link>
<Link to="/Product">
<div className="deals-image" onClick={() => productsDispatch({type:"MENS_CLOTHING"})}>
<img src="https://cdn3.mydukaan.io/app/image/500x500/?url=https://dukaan-us.s3.amazonaws.com/6963100/96a02c56-db7d-4dd4-a1c3-9cd0850e0181/frame-20-811b60f6-85c5-4c8c-aa62-1e93b5d28307-ba72b9eb-eb23-421e-9ec8-57d032d1dec2.png" alt="p/roduct" />
<p className="deals-text">Men's upto 40% off</p>
</div>
</Link>
<div className="deals-image">
<img src="https://cdn3.mydukaan.io/app/image/500x500/?url=https://dukaan-us.s3.amazonaws.com/6963100/96a02c56-db7d-4dd4-a1c3-9cd0850e0181/frame-21-b13c80e4-e2a2-483b-b804-3ca7032b3c03-e15f72c1-8789-4545-b8f6-0ee6a18cc8f1.png" alt="p/roduct" />
<p className="deals-text">upto 65% off</p>
</div> 
<div className="deals-image">
<img src="https://cdn3.mydukaan.io/app/image/500x500/?url=https://dukaan-us.s3.amazonaws.com/6963100/96a02c56-db7d-4dd4-a1c3-9cd0850e0181/frame-19-e43ebbf5-5cb1-430b-9906-bd62052ab76d-ee6410d2-19b7-4f3c-bfe1-38339b5cfbfc.png" alt="p/roduct" />
<p className="deals-text">upto 70% off</p>
</div> 

</div>

    </div>
  )
}
