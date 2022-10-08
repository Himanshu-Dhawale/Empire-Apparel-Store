import React from 'react'
import "./Product.css"
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { ProductListing } from '../../components/ProductListing/ProductListing'
import {Navbar} from "../../components/Navbar/Navbar";
export const Product = () => {
  return (
    <div>
      <Navbar/>
        <Sidebar/>
        <ProductListing/>
    </div>
  )
}
