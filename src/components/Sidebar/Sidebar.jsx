import React from 'react'
import { useReducer } from 'react';
import axios from 'axios';
import "./Sidebar.css"
import { useProduct } from '../../context/productcontext';
import { reducer } from '../../reducer/product-reducer';
export const Sidebar = () => {



  const { sortBy, productsDispatch, rating,range,clear, category: { mensclothing,
    womensclothing } } = useProduct()
  return (
    <main className="main-section">
      <aside className="filter-section">
        <div className="filter-and-clear-section">
          <div className="filter">filter</div>
          <button className="filter-btn" onClick={() => productsDispatch({type:"CLEAR"})}>clear</button>
        </div>
        <div className="slider-section">
          <div className="slider-section-heading">{range}</div>
          


          <input
            type="range"
            className="slider"
            step="1000"
            min="1000"
            max="3000"
            onChange={(e) =>
              productsDispatch({ type: "RANGE", payload: e.target.value })
            }
          />
        </div>
        <div className="rating-section">
          <div className="rating-section-heading">rating</div>
          <label className="rating-label" htmlFor="rating1">

            <input type="radio" id="rating1" name="radio" checked={rating === "FOUR"} onChange={() => productsDispatch({ type: "FOUR_STAR" })} />
            4 star
          </label>
          <label className="rating-label" htmlFor="rating2">
            <input type="radio" id="rating2" name="radio" checked={rating === "THREE"} onChange={() => productsDispatch({ type: "THREE_STAR" })} />
            3 star
          </label>
          <label className="rating-label" htmlFor="rating3">
            <input type="radio" id="rating3" name="radio" checked={rating === "TWO"} onChange={() => productsDispatch({ type: "TWO_STAR" })} />
            2 star
          </label>
          <label className="rating-label" htmlFor="rating4">
            <input type="radio" id="rating4" name="radio" checked={rating === "ONE"} onChange={() => productsDispatch({ type: "ONE_STAR" })} />
            1 star
          </label>
        </div>

        <div className="category-section">
          <div className="category-section-heading">Category</div>
          <label htmlFor="category1">
            <input type="checkbox" id="category1" name="category1" checked={mensclothing} onChange={() => productsDispatch({ type: "MENS_CLOTHING" })} />
            Men's Clothing
          </label>
          <label htmlFor="category2">
            <input type="checkbox" id="category2" name="category2" checked={womensclothing} onChange={() => productsDispatch({ type: "WOMENS_CLOTHING" })} />
            Women's Clothing
          </label>
        </div>
        <div className="sort-by-section">
          <div className="sort-by-heading">sort by</div>
          <label htmlFor="sortby1">
            <input type="radio" id="sortby1" name="radio" checked={sortBy === 'HIGH_TO_LOW'} onChange={() => productsDispatch({ type: 'HIGH_TO_LOW' })} />
            Price : Hight to Low
          </label>
          <label htmlFor="sortby2">
            <input type="radio" id="sortby2" name="radio" checked={sortBy === 'LOW_TO_HIGH'} onChange={() => productsDispatch({ type: 'LOW_TO_HIGH' })} />
            Price : Low to High
          </label>
        </div>
      </aside>
    </main>
  )
}
