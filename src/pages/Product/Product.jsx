import React from 'react'
import "./Product.css"
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { ProductListing } from '../../components/ProductListing/ProductListing'
export const Product = () => {
  return (
    <div>
        <Sidebar/>
        <ProductListing/>
    </div>
  )
}
