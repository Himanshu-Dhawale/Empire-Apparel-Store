import React from 'react'
import"./ProductListing.css"
import { useEffect } from "react";
import { useCart } from '../../context/cartcontext';
import { useWish } from '../../context/wishlistcontext';
import { useProduct } from '../../context/productcontext';
import axios from 'axios';

import "./ProductListing.css"
export const ProductListing = () => {
    const { addToCart } = useCart();
    const { toggleWishItem } = useWish();
    const { product,
        setProduct, sortBy, category, rating, range } = useProduct();

    useEffect(() => {
        (async () => {

            const response = await axios.get('/api/products');

            setProduct(response.data.products
            )

        })()

    }, [])

    const sortByPrice = (data, sortBy) => {

        if (sortBy === 'LOW_TO_HIGH') {

            return [...data].sort((a, b) => a.price - b.price)
        }
        if (sortBy === 'HIGH_TO_LOW') {
            return [...data].sort((a, b) => b.price - a.price)
        }
        return data;
    }

const filterByCategory = (product, category) => {
const {   mensclothing,
    womensclothing} = category;
let updateMensCategory = [], updatedWomensCategory = [];
    if(!mensclothing && !womensclothing){
        return product;
    }
    if(mensclothing){
        updateMensCategory = product.filter((item) => item.categoryName ===  "mens")
        
    }
    if(womensclothing){
        updatedWomensCategory = product.filter((item) => item.categoryName ===  "womens")
    }
    return [...updateMensCategory, ...updatedWomensCategory]

}

const sortByRating = (product, rating) =>{

        if(rating === "FOUR"){
          return  product.filter((item => item.rating > 4))
        }
        if(rating === "THREE"){
          return  product.filter((item => item.rating > 3))
        }
        if(rating === "TWO"){
          return  product.filter((item => item.rating > 2))
        }
        if(rating === "ONE"){
          return  product.filter((item => item.rating > 1))
        }
    return product;
}

function filterByPriceRange(ratedProducts, range) {
    
    if (range) {
      const newData = ratedProducts.filter((item) => item.price <= range);
      return newData;
    }
    return ratedProducts;
  }

const getFilterByCategory = filterByCategory(product, category);
const getSortByPrice = sortByPrice(getFilterByCategory, sortBy);
const getRatedCategory = sortByRating(getSortByPrice, rating)
const products = filterByPriceRange(getRatedCategory, range);
    return (
        <div>

            {products && products.map((item) =>
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
                                    <a className="btn btn-primary-solid" onClick={() => addToCart(item)}>Add to Cart</a>
                                    <a className="btn btn-primary-solid" onClick={() => toggleWishItem(item)}>Add to Wishlist</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
}
